import { takeEvery, put, call } from 'redux-saga/effects';
import { getPets } from '../actions/care.actions';
import { api } from 'shared/constants/api';

async function fetchPets() {
  const dogProfiles = await fetch(`${api}/pets`);
  if (dogProfiles.ok) {
    return await dogProfiles.json();
  } else {
    return Promise.reject();
  }
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
