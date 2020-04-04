import { takeEvery, put, call } from 'redux-saga/effects';
import { getPets } from '../actions/care.actions';

function fetchPets() {
  return fetch('https://fathomless-ridge-53873.herokuapp.com/pets').then(response => response.json());
}

function* petsWatcher() {
  try {
    const pets = yield call(fetchPets);

    yield put(getPets.success(pets));
  } catch (error) {
    yield put(getPets.failure(error));
  }
}

export function* careSaga() {
  yield takeEvery(getPets.request, petsWatcher);
}
