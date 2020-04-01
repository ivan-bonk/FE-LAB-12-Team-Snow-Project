import { put, call, take } from 'redux-saga/effects';
import {fetchPetProfile}  from '../actions/pet.action';

async function fetchPet(id:number) {
  //For testing
  // const idExample:string = '5e82203cfbbf2d2d6098ac0f';

  const dogProfile = await fetch(`https://fathomless-ridge-53873.herokuapp.com/pets/${id}`);
  if (dogProfile.ok) {
    return await dogProfile.json();  
  } else {
    return Promise.reject();
  }
}

function* handleFetch(data: {payload: number}) {
  const id = data.payload;
  try {
    const res = yield call(fetchPet, id)
    if (res.error) {
      yield put(fetchPetProfile.failure(res.error))
    } else {
      yield put(fetchPetProfile.success(res))
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(fetchPetProfile.failure(err.stack!))
    } else {
      yield put(fetchPetProfile.failure('Невідома помилка :('))
    }
  }
}

export function* watchLoadPet() {
  const id = yield take(fetchPetProfile.request)
  yield call(handleFetch, id)
}




