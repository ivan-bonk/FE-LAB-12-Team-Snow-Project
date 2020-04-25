import filterReducer, { initialState } from '../reducers/filter.reducer';
import { filterAction } from '../actions/filter.action';

import expect from 'expect';

describe('filter reducer', () => {
  it('should return initial state ', () => {
    const action: any = {
      type: filterAction,
      payload: null,
    };

    const successAction = filterReducer(initialState, action);
    const expectedState = null;
    expect(successAction).toEqual(expectedState);
  });
});
