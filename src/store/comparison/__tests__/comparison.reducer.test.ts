import { comparisonReducer } from 'store/comparison/reducers/comparison.reducer';
import { petsToCompare } from '../mocks';
import { initialState } from '../reducers/comparison.reducer';
import { GetPetsById } from '../actions/comparison.action';

describe('test comparison reducer', () => {
  it('should test @comparison/PETS_BYID_REQUEST', () => {
    const expectedState = {
      petsToCompare: [],
      error: '',
      loading: true,
    };
    const action: any = {
      type: GetPetsById.request,
    };
    const updatedState = comparisonReducer(initialState, action);
    expect(updatedState).toEqual(expectedState);
  });
  it('should test @comparison/PETS_BYID_SUCCESS', () => {
    const expectedState = {
      petsToCompare: petsToCompare,
      error: '',
      loading: false,
    };
    const action: any = {
      type: GetPetsById.success,
      payload: petsToCompare,
    };
    const updatedState = comparisonReducer(initialState, action);
    expect(updatedState).toEqual(expectedState);
  });
  it('should test @comparison/PETS_BYID_FAILURE', () => {
    const expectedState = {
      petsToCompare: [],
      error: 'error',
      loading: false,
    };
    const action: any = {
      type: GetPetsById.failure,
      payload: 'error',
    };
    const updatedState = comparisonReducer(initialState, action);
    expect(updatedState).toEqual(expectedState);
  });
  it('should test @comparison/REMOVE_COMPARISON_LIST', () => {
    const expectedState = {
      petsToCompare: [],
      error: '',
      loading: false,
    };
    const action: any = {
      type: '@comparison/REMOVE_COMPARISON_LIST',
    };
    const updatedState = comparisonReducer(
      {
        petsToCompare: ['some data inside'],
        error: '',
        loading: false,
      },
      action,
    );
    expect(updatedState).toEqual(expectedState);
  });
});
