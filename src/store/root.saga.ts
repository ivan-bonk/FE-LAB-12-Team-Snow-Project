import createSagaMiddleware from 'redux-saga';
import {fork, all } from 'redux-saga/effects';
import {petSaga} from './sagas/pet.saga'

export const saga = createSagaMiddleware();

export function* rootSaga() {
    yield all([fork(petSaga)])
} 