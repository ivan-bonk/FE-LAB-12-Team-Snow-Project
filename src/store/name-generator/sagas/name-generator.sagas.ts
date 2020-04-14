import { put, call, takeEvery, fork, all } from 'redux-saga/effects';
import { fetchPetNames } from '../actions/name-generator.actions';
import { api } from 'shared/constants/api';

async function fetchNames() {
  const petNames = await fetch(`${api}/alias`);
  if (petNames.ok) {
    return await petNames.json();
  } else {
    return Promise.reject();
  }
}

function* handleFetch() {
  try {
    const res = yield call(fetchNames);
    if (res.error) {
      yield put(fetchPetNames.failure(res.error));
    } else {
      yield put(fetchPetNames.success(res));
    }
  } catch (err) {
    yield put(fetchPetNames.failure(err.stack!));
  }
}

export function* watchLoadNames() {
  yield takeEvery(fetchPetNames.request, handleFetch);
}

export function* petNamesSaga() {
  yield all([fork(watchLoadNames)]);
}
