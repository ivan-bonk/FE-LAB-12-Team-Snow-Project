import { put, call, takeEvery, fork, all } from 'redux-saga/effects';
import { fetchPetProfile } from '../actions/pet.actions';

async function fetchPet(id: string) {
  const dogProfile = await fetch(`https://fathomless-ridge-53873.herokuapp.com/pets/${id.toString()}`);
  if (dogProfile.ok) {
    return await dogProfile.json();
  } else {
    return Promise.reject();
  }
}

function* handleFetch(data: { payload: string }) {
  try {
    const id = data.payload;
    const res = yield call(fetchPet, id);
    if (res.error) {
      yield put(fetchPetProfile.failure(res.error));
    } else {
      yield put(fetchPetProfile.success(res));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(fetchPetProfile.failure(err.stack!));
    } else {
      yield put(fetchPetProfile.failure('Невідома помилка :('));
    }
  }
}

export function* watchLoadPet() {
  yield takeEvery(fetchPetProfile.request, handleFetch);
}

export function* petSaga() {
  yield all([fork(watchLoadPet)]);
}
