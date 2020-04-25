import { takeEvery, put, call, fork, all } from 'redux-saga/effects';
import { GetPetsById } from '../actions/comparison.action';

import { fetchData } from '../services/get-pets-by-id-fetch.api';
import { ActionType } from 'typesafe-actions';

export function* getPetsByIdWorker(action: ActionType<typeof GetPetsById.request>) {
  try {
    const response = yield call(fetchData, action.payload);
    yield put(GetPetsById.success(response));
  } catch (err) {
    yield put(GetPetsById.failure('Magic error'));
  }
}

export function* getPetsByIdWacher() {
  yield takeEvery(GetPetsById.request, getPetsByIdWorker);
}

export function* comparisonSaga() {
  yield all([fork(getPetsByIdWacher)]);
}
