import { takeEvery, put, call } from 'redux-saga/effects';
import { putFetchedPets } from '../result/result.actions';
import { FETCH_PETS } from '../result/result.types';

function fetchPets() {
    return fetch('http://localhost:3001/pets')
            .then(response => response.json());
};

function* workerFetchPets() {
    const pets = yield call(fetchPets);

    yield put(putFetchedPets(pets))
};

export function* watchFetchPets() {
    yield takeEvery(FETCH_PETS, workerFetchPets);
}