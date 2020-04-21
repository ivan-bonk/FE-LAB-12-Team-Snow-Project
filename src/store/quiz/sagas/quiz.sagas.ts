import { put, call, takeEvery, fork, all } from 'redux-saga/effects';
import { fetchPetBreeds } from '../actions/quiz.action';
import { api } from 'shared/constants/api';

async function fetchBreeds() {
  const petBreeds = await fetch(`${api}/breeds`);
  if (petBreeds.ok) {
    return await petBreeds.json();
  } else {
    return Promise.reject();
  }
}

function* handleFetch() {
  try {
    const res = yield call(fetchBreeds);
    if (res.error) {
      yield put(fetchPetBreeds.failure(res.error));
    } else {
      yield put(fetchPetBreeds.success(res));
    }
  } catch (err) {
    yield put(fetchPetBreeds.failure(err.stack!));
  }
}

export function* watchLoadNames() {
  yield takeEvery(fetchPetBreeds.request, handleFetch);
}

export function* petBreedsSaga() {
  yield all([fork(watchLoadNames)]);
}
