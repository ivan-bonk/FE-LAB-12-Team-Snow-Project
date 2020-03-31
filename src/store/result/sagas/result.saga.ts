import { takeEvery, put, call } from 'redux-saga/effects';
import { fetchPetsAsync } from '../actions/result.actions';

function fetchPets() {
  return fetch('http://localhost:3001/pets').then(response => response.json());
}

function* workerFetchPets() {
  try {
    const pets = yield call(fetchPets);

    yield put(fetchPetsAsync.success(pets));
  } catch (error) {
    yield put(fetchPetsAsync.failure(error));
  }
}

export function* watchFetchPets() {
  yield takeEvery(fetchPetsAsync.request, workerFetchPets);
}
