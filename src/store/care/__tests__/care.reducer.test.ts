import { careReducer, initialState } from '../reducers/care.reducers';
import { getPets } from '../actions/care.actions';

describe('care reducer', () => {
  it('should handle GET_PETS_SUCCESS', () => {
    const successAction = careReducer(initialState, { type: getPets.success, payload: initialState });
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
    const successAction = careReducer(null, { type: getPets.failure });
    const expectedState = null;
    expect(successAction).toEqual(expectedState);
  });
});
