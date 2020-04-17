import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import { resultSaga } from './result/sagas/result.saga';
import { comparisonSaga } from './comparison/sagas/comparison.saga';
import { petSaga } from './pet/sagas/pet.saga';
import { careSaga } from './care/sagas/care.sagas';
import { petNamesSaga } from './name-generator/sagas/name-generator.sagas';
import { petBreedsSaga } from './quiz/sagas/quiz.sagas';

export const saga = createSagaMiddleware();

export function* rootSaga() {
  yield all([
    fork(petSaga),
    fork(comparisonSaga),
    fork(resultSaga),
    fork(careSaga),
    fork(petBreedsSaga),
    fork(petNamesSaga),
  ]);
}
