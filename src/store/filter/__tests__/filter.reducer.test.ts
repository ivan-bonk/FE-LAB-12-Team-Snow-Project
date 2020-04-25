import filterReducer, { initialState } from '../reducers/filter.reducer';
import { filterAction } from '../actions/filter.action';

import expect from 'expect';

describe('filter reducer', () => {
  it('should return initial state ', () => {
    const successAction = filterReducer(initialState, filterAction);
    const expectedState = null;
    expect(successAction).toEqual(expectedState);
  });
});
