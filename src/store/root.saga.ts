import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import { resultSaga } from './result/sagas/result.saga';

export const saga = createSagaMiddleware();

export function* rootSaga() {
  yield all([fork(resultSaga)]);
}
