import { takeEvery } from 'redux-saga/effects';
import { runSaga } from 'redux-saga';
import { getPetsByIdWacher, getPetsByIdWorker } from 'store/comparison/sagas/comparison.saga';
import { GetPetsById } from 'store/comparison/actions/comparison.action';
import { fetchData } from 'store/comparison/services/get-pets-by-id-fetch.api';
import { petsToCompare } from '../mocks';

describe('test fetch pets by id function', () => {
  const genObject = getPetsByIdWacher();

  it('should wait for every FETCH action and call getPetsByIdWorker', () => {
    expect(genObject.next().value).toEqual(takeEvery(GetPetsById.request, getPetsByIdWorker));
  });
  it('should request and return pets to compare with specifiid ids', async () => {
    const data = await fetchData(['5e8c4ffb4ed5f230f4c261fb', '5e8c4ffb4ed5f230f4c261f9']);
    expect(data).toStrictEqual(petsToCompare);
  });
});

// describe('test comparison saga - error', () => {
//   it('should call api and dispatch failure action', async () => {
//     const dispatched: any[] = [];
//     const result = await runSaga(
//       {
//         dispatch: action => dispatched.push(action),
//       },
//       getPetsByIdWorker,
//       {
//         type: GetPetsById.request,
//         payload: ['aaa', 'aaa'],
//       },
//     ).toPromise();
//     expect(dispatched).toEqual([GetPetsById.failure('Magic error')]);
//   });
// });

// describe('test comparison saga - success', () => {
//   it('should call api and dispatch success action', async () => {
//     const dispatched: any[] = [];
//     const result = await runSaga(
//       {
//         dispatch: action => dispatched.push(action),
//       },
//       getPetsByIdWorker,
//       {
//         type: GetPetsById.request,
//         payload: ['5e8c4ffb4ed5f230f4c261fb', '5e8c4ffb4ed5f230f4c261f9'],
//       },
//     ).toPromise();
//     expect(dispatched).toEqual([GetPetsById.success(petsToCompare)]);
//   });
//});
