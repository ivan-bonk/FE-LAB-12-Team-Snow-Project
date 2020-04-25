import { resultReducer, initiatState } from '../reducers/result.reducer';
import { fetchPetsAsync } from '../actions/result.actions';
import { pet } from '../mocks';

describe('test result reducer', () => {
  it('should test FETCH_PETS_REQUEST', () => {
    const action = {
      type: fetchPetsAsync.request,
    };

    expect(resultReducer(initiatState, action)).toEqual(initiatState);
  });

  it('shoud test FETCH_PETS_SUCCESS', () => {
    const expectedState = {
      resultStore: [pet],
      errors: '',
    };

    const action = {
      type: fetchPetsAsync.success,
      payload: [pet],
    };

    expect(resultReducer(initiatState, action)).toEqual(expectedState);
  });

  it('should test FETCH_PETS_FAILTURE', () => {
    const expectedState = {
      resultStore: [],
      errors: 'Error',
    };

    const action = {
      type: fetchPetsAsync.failure,
      payload: 'Error',
    };

    expect(resultReducer(initiatState, action)).toEqual(expectedState);
  });
});
