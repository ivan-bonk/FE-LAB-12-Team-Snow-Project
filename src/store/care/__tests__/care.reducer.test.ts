import { careReducer, initialState } from '../reducers/care.reducers';
import { getPets } from '../actions/care.actions';

describe('care reducer', () => {
  it('should handle GET_PETS_SUCCESS', () => {
    const action: any = {
      type: getPets.success,
      payload: initialState,
    };
    const successAction = careReducer(initialState, action);
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
    const action: any = {
      type: getPets.failure,
    };

    const successAction = careReducer(null, action);
    const expectedState = null;
    expect(successAction).toEqual(expectedState);
  });
});
