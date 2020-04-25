import { takeEvery } from 'redux-saga/effects';
import { runSaga } from 'redux-saga';
import { fetchBreeds, handleFetch, watchLoadNames } from '../sagas/quiz.sagas';
import { fetchPetBreeds } from '../actions/quiz.action';
import { petBreeds } from '../mocks';

const res = 'Австралійська вівчарка (Ауссі)';

describe('text fetch Pets Breeds function', () => {
  const pets = watchLoadNames();

  it('should wait for every FETCH action and call fetchPetsBreeds', () => {
    expect(pets.next().value).toEqual(takeEvery(fetchPetBreeds.request, handleFetch));
  });

  it('should request and return first breed from breeds array  ', async () => {
    const data = await fetchBreeds();

    expect([data[0]]).toEqual([res]);
  });
});

describe('test result saga', () => {
  it('should call api and dispatch success action and return breeds array', async () => {
    const dispatched: any[] = [];

    const result = await runSaga({ dispatch: action => dispatched.push(action) }, handleFetch).toPromise();
    expect(dispatched).toEqual([fetchPetBreeds.success(petBreeds)]);
  });
});
