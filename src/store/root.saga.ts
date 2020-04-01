import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import { comparisonSaga } from './sagas/comparison.saga';

export const saga = createSagaMiddleware();

export function* rootSaga() {
  yield all([fork(comparisonSaga)]);
}
