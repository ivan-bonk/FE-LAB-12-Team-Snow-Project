import { take, put, call } from 'redux-saga/effects';
import { FIND_PETS, putPetsById } from '../actions/comparison.action';


function fetchData(ids: string[]): object[] {
    // return ids.map((el) => {
    //     fetch(`...../${el}`)
    //     .then(response => response.json)
    //     .catch(err => {
    //         console.error(err);
    //     })
    // })
    return [
        {
            id: "122",
            imgUrl: 'https://lapkins.ru/upload/iblock/c35/c354befe4fd9dc1c6f7baaf41fa80d74.jpg',
            alias: "Бігль",
            popularity: 5,
            training: 3,
            careTime: '95 хв'
        },
        {
            id: "223",
            imgUrl: 'https://lapki.pet/uploads/article/43/coderzhanie-akita-inu.jpg',
            alias: "Акіта",
            popularity: 3,
            training: 4,
            careTime: '25 хв'
        },
        {
            id: "334",
            imgUrl: 'https://zoolandy.ru/assets/components/phpthumbof/cache/6951-1.fc1d92c6b7a832b7f0ac395e0381142c7093.jpg',
            alias: "Гладко-шерстий терєр",
            popularity: 1,
            training: 4,
            careTime: '70 хв'
        }
        
    ]
}

function* workerPets(ids: { payload: string[] }) {
    const pets = yield call(fetchData, ids.payload)
    yield put(putPetsById(pets));
}

export function* watchPets() {

    const ids = yield take(FIND_PETS)
    yield call(workerPets, ids)
}