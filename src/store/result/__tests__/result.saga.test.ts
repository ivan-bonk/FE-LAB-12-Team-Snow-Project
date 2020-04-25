import { takeEvery } from 'redux-saga/effects';
import { runSaga } from 'redux-saga';
import { fetchPets, workerFetchPets, resultSaga } from '../sagas/result.saga';
import { fetchPetsAsync } from '../actions/result.actions';
import { petProfile } from '../mocks';

describe('text fetchPets function', () => {
  const pets = resultSaga();

  it('should wait for every FETCH action and call workerFetchPets', () => {
    expect(pets.next().value).toEqual(takeEvery(fetchPetsAsync.request, workerFetchPets));
  });

  it('should request and return pets array', async () => {
    const data = await fetchPets();

    expect([data[0]]).toEqual([petProfile]);
  });
});

describe('test result saga', () => {
  it('should call api and dispatch success action', async () => {
    const dispatched: any[] = [];

    const result = await runSaga({ dispatch: action => dispatched.push(action) }, workerFetchPets).toPromise();

    expect([dispatched[0].payload[0]]).toEqual(fetchPetsAsync.success([petProfile]).payload);
  });
});
