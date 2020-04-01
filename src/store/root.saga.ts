import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import { comparisonSaga } from './sagas/comparison.saga';
import { petSaga } from './sagas/pet.saga';

export const saga = createSagaMiddleware();

export function* rootSaga() {
  yield all([fork(petSaga), fork(comparisonSaga)]);
}
