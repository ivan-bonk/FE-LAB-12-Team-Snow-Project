import {takeEvery, put, call, fork, all } from 'redux-saga/effects';
import { asyncGetPeysById } from '../actions/comparison.action'

import fetchData from '../services/get-pets-by-id-fetch.api';
import { ActionType} from 'typesafe-actions';


function* getPetsByIdWorker(action: ActionType<typeof asyncGetPeysById.request>) {
  try {
    const response = yield call(fetchData, action.payload);
    yield put(asyncGetPeysById.success(response));
  } catch (err){
    yield put(asyncGetPeysById.failure(err))
  }
}

function* getPetsByIdWacher() {
  yield takeEvery(asyncGetPeysById.request, getPetsByIdWorker);
}


export function* comparisonSaga() {
  yield all([fork(getPetsByIdWacher)])
}
 


