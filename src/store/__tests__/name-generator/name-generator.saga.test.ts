import { takeEvery } from 'redux-saga/effects';
import { runSaga } from 'redux-saga';
import { handleFetch, watchLoadNames, fetchNames } from 'store/name-generator/sagas/name-generator.sagas';
import { fetchPetNames } from 'store/name-generator/actions/name-generator.actions';
import { response } from './hardcoded-data';

describe('test fetchPetNames function', () => {
  const genObject = watchLoadNames();

  it('should wait for every FETCH action and call handleFetch', () => {
    expect(genObject.next().value).toEqual(takeEvery(fetchPetNames.request, handleFetch));
  });
  it('should request and return petNames', async () => {
    const data = await fetchNames();
    expect(data).toStrictEqual(response);
  });
});

describe('test full name generator saga', () => {
  it('should call api and dispatch success action', async () => {
    const dispatched: any[] = [];
    const result = await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      handleFetch,
    ).toPromise();
    expect(dispatched).toEqual([fetchPetNames.success(response)]);
  });
});
