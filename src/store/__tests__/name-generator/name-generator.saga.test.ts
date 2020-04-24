import { takeEvery } from 'redux-saga/effects';
import { runSaga } from 'redux-saga';
import {handleFetch, watchLoadNames, fetchNames} from '../../name-generator/sagas/name-generator.sagas';
import {fetchPetNames} from '../../name-generator/actions/name-generator.actions';

const res = {"boys":["Джокер","Радар","Шанс","Лазер","Кактус","Факс","Одін","Байт","Кактус","Скаут","Каспер","Ліміт","Йогурт","Нейтрон","Вольт","Ролекс","Буфер","Гайд","Космос","Фантом","Плутон","Шухер","Денді","Форекс","Квант","Кексик","Йода","Айсберг","Твістер","Спритник","Скутер","Карбон","Фокус"],"girls":["Б’юті","Кармен","Лессі","Жужа","Мегі","Мімі","Доні","Дуся","Лінда","Нессі","Хлоя","Майла","Туся","Пуговка","Ірма","Дейзі","Мей","Афіна","Ебі","Піксі","Ема","Бетсі","Белль","Дора","Дафна","Кіра","Люсі","Тріксі","Еніс"],"_id":"5e901fd597ba611478f25a36","__v":0};

describe('test fetchPetNames function', () => {
    const genObject = watchLoadNames();
    
    it('should wait for every FETCH action and call handleFetch', () => {
        expect(genObject.next().value)
        .toEqual(takeEvery(fetchPetNames.request, handleFetch));
    });
    it('should request and return petNames', async () => {
      const data = await fetchNames();
      expect(data).toStrictEqual(res);
  });
});

describe('test full name generator saga', () => {
    it('should call api and dispatch success action', async () => {
      const dispatched: any[] = [];
      const result = await runSaga({
        dispatch: (action) => dispatched.push(action),
      }, handleFetch).toPromise(); 
      expect(dispatched).toEqual([fetchPetNames.success(res)]);
    });
})
