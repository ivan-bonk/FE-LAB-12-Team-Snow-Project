import { careReducer, initialState } from '../reducers/care.reducers';
import { getPets } from '../actions/care.actions';

import expect from 'expect';

describe('care reducer', () => {
  it('should handle GET_PETS_REQUEST', () => {
    const successAction = careReducer(undefined, getPets.request);
    const expectedState = {
      _id: 0,
      photos: [],
      breed: '',
      characteristics: {
        spandTime: '',
        outlay: '',
        size: '',
      },
    };
    expect(successAction).toEqual(expectedState);
  });
  it('should handle GET_PETS_SUCCESS', () => {
    const successAction = careReducer(initialState, getPets.success);
    const expectedState = {
      _id: 0,
      photos: [],
      breed: '',
      characteristics: {
        spandTime: '',
        outlay: '',
        size: '',
      },
    };
    expect(successAction).toEqual(expectedState);
  });
  it('should handle GET_PETS_FAILTURE', () => {
    const successAction = careReducer(null, getPets.failure);
    const expectedState = null;
    expect(successAction).toEqual(expectedState);
  });
});
