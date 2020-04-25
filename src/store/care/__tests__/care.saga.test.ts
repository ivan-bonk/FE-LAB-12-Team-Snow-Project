import { takeEvery } from 'redux-saga/effects';
import { runSaga } from 'redux-saga';
import { fetchPets, petsWatcher, careSaga } from '../sagas/care.sagas';
import { getPets } from '../actions/care.actions';
import { petProfile } from '../mocks';

describe('text fetchPets function', () => {
  const pets = careSaga();

  it('should wait for every FETCH action and call workerFetchPets', () => {
    expect(pets.next().value).toEqual(takeEvery(getPets.request, petsWatcher));
  });

  it('should request and return pets array', async () => {
    const data = await fetchPets();

    expect([data[0]]).toEqual([petProfile]);
  });
});

describe('test result saga', () => {
  it('should call api and dispatch success action', async () => {
    const dispatched: any[] = [];

    const result = await runSaga({ dispatch: action => dispatched.push(action) }, petsWatcher).toPromise();

    expect([dispatched[0].payload[0]]).toEqual([getPets.success(petProfile).payload]);
  });
});
