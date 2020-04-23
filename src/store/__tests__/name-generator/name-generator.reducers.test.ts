import {nameGeneratorReducer} from '../../name-generator/reducers/name-generator.reducers';

const res = {"boys":["Джокер","Радар","Шанс","Лазер","Кактус","Факс","Одін","Байт","Кактус","Скаут","Каспер","Ліміт","Йогурт","Нейтрон","Вольт","Ролекс","Буфер","Гайд","Космос","Фантом","Плутон","Шухер","Денді","Форекс","Квант","Кексик","Йода","Айсберг","Твістер","Спритник","Скутер","Карбон","Фокус"],"girls":["Б’юті","Кармен","Лессі","Жужа","Мегі","Мімі","Доні","Дуся","Лінда","Нессі","Хлоя","Майла","Туся","Пуговка","Ірма","Дейзі","Мей","Афіна","Ебі","Піксі","Ема","Бетсі","Белль","Дора","Дафна","Кіра","Люсі","Тріксі","Еніс"]}

describe('nameGenerator reducer', () => {

    it('returns next boy id', () => {
      const expectedState = {
        petNames: {
          boys: [],
          girls: [],
        },
        girlId: 0,
        boyId: 1,
        errors: '',
        loading: false,
      };
      const action = {
        type: '@name-generator/SET_BOY'
      };
      const updatedState = nameGeneratorReducer(undefined, action);
      expect(updatedState).toEqual(expectedState);
    })

    it('returns next girl id', () => {
        const expectedState = {
            petNames: {
              boys: [],
              girls: [],
            },
            girlId: 1,
            boyId: 0,
            errors: '',
            loading: false,
          };
        const action = {
          type: '@name-generator/SET_GIRL'
        };
        const updatedState = nameGeneratorReducer(undefined, action);
        expect(updatedState).toEqual(expectedState);
      })

      it('returns request', () => {
        const expectedState = {
            petNames:  {
                boys: [],
                girls: [],
              },
            girlId: 0,
            boyId: 0,
            errors: '',
            loading: true,
          };
        const action = {
          type: '@name-generator/FETCH_REQUEST',
        };
        const updatedState = nameGeneratorReducer(undefined, action);
        expect(updatedState).toEqual(expectedState);
      })

      it('returns success', () => {
        const expectedState = {
            petNames: res,
            girlId: 0,
            boyId: 0,
            errors: '',
            loading: false,
          };
        const action = {
          type: '@name-generator/FETCH_SUCCESS',
          payload: res
        };
        const updatedState = nameGeneratorReducer(undefined, action);
        expect(updatedState).toEqual(expectedState);
      })

      it('returns error', () => {
        const expectedState = {
            petNames: {
                boys: [],
                girls: [],
              },
            girlId: 0,
            boyId: 0,
            errors: 'Some error',
            loading: false,
          };
        const action = {
          type: '@name-generator/FETCH_ERROR',
          payload: 'Some error'
        };
        const updatedState = nameGeneratorReducer(undefined, action);
        expect(updatedState).toEqual(expectedState);
      })
  });




