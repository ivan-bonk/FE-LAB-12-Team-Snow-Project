import { take, put, call } from 'redux-saga/effects';
import { FIND_PETS, putPetsById } from '../actions/comparison.action';

async function fetchData(ids: string[]) {
  const data = [];

  for (const id of ids) {
    // const pet = await fetch(`http://localhost:8080/pets/${id}`)
    const pet = await fetch(`https://fathomless-ridge-53873.herokuapp.com/pets/${id}`)
      .then(response => response.json())
      .catch(err => {
        console.error(err);
      });
    data.push(pet);
  }

  return data;
}

function* workerPets(ids: { payload: string[] }) {
  const pets = yield call(fetchData, ids.payload);
  yield put(putPetsById(pets));
}

export function* watchPets() {
  const ids = yield take(FIND_PETS);
  yield call(workerPets, ids);
}
