import { takeEvery } from 'redux-saga/effects';
import { runSaga } from 'redux-saga';
import { handleFetch, watchLoadPet, fetchPet } from 'store/pet/sagas/pet.saga';
import { fetchPetProfile } from 'store/pet/actions/pet.actions';
import { fullPetProfile } from '../mocks';

describe('test fetchPetProfile function', () => {
  const genObject = watchLoadPet();

  it('should wait for every FETCH action and call handleFetch', () => {
    expect(genObject.next().value).toEqual(takeEvery(fetchPetProfile.request, handleFetch));
  });
  it('should request and return petProfile with specifiid id', async () => {
    const data = await fetchPet('5e8c4ffb4ed5f230f4c261fb');
    expect(data).toStrictEqual(fullPetProfile);
  });
});

describe('test full pet saga - error', () => {
  it('should call api and dispatch success action', async () => {
    const dispatched: any[] = [];
    const result = await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      handleFetch,
      { payload: '5e8c4' },
    ).toPromise();
    expect(dispatched).toEqual([fetchPetProfile.failure('Невідома помилка :(')]);
  });
});

describe('test full pet saga - success', () => {
  it('should call api and dispatch success action', async () => {
    const dispatched: any[] = [];
    const result = await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      handleFetch,
      { payload: '5e8c4ffb4ed5f230f4c261fb' },
    ).toPromise();
    expect(dispatched).toEqual([fetchPetProfile.success(fullPetProfile)]);
  });
});
