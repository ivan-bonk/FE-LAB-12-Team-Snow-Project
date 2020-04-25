import { comparisonHandlerReducer } from '../reducers/comparison-handler.reducer';
import { initialState } from '../reducers/comparison-handler.reducer';
import { idsToCompareState } from '../mocks';

describe('test comparison handler reducer', () => {
  it('should add pet to compare', () => {
    const expectedState = {
      idsToCompare: ['123'],
    };
    const action = {
      type: '@comparison/ADD_COMPARISON_PET',
      payload: '123',
    };

    const updatedState = comparisonHandlerReducer(initialState, action);

    expect(updatedState).toEqual(expectedState);
  });

  it('should delete pets to compare', () => {
    const expectedState = {
      idsToCompare: [],
    };
    const action = {
      type: '@comparison/REMOVE_COMPARISON_PET',
      payload: '123',
    };
    const updatedState = comparisonHandlerReducer(idsToCompareState, action);
    expect(updatedState).toEqual(expectedState);
  });
});
