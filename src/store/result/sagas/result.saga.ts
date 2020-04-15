import { takeEvery, put, call } from 'redux-saga/effects';
import { fetchPetsAsync } from '../actions/result.actions';
import { api } from 'shared/constants/api';

async function fetchPets() {
  const dogProfiles = await fetch(`${api}/pets`);
  if (dogProfiles.ok) {
    return await dogProfiles.json();
  } else {
    return Promise.reject();
  }
}

function* workerFetchPets() {
  try {
    const pets = yield call(fetchPets);

    yield put(fetchPetsAsync.success(pets));
  } catch (error) {
    yield put(fetchPetsAsync.failure(error));
  }
}

export function* resultSaga() {
  yield takeEvery(fetchPetsAsync.request, workerFetchPets);
}
