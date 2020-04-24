import { petReducer } from 'store/pet/reducers/pet.reducer';
import { petProfile, initialState } from '../mocks';

describe('test pet reducer', () => {
  it('should test @pet/FETCH_REQUEST', () => {
    const expectedState = {
      currentPet: {},
      errors: '',
      loading: true,
    };
    const action = {
      type: '@pet/FETCH_REQUEST',
    };
    const updatedState = petReducer(initialState, action);
    expect(updatedState).toEqual(expectedState);
  });
  it('should test @pet/FETCH_SUCCESS', () => {
    const expectedState = {
      currentPet: petProfile,
      errors: '',
      loading: false,
    };
    const action = {
      type: '@pet/FETCH_SUCCESS',
      payload: petProfile,
    };
    const updatedState = petReducer(initialState, action);
    expect(updatedState).toEqual(expectedState);
  });
  it('should test @pet/FETCH_ERROR', () => {
    const expectedState = {
      currentPet: {},
      errors: 'Some error',
      loading: false,
    };
    const action = {
      type: '@pet/FETCH_ERROR',
      payload: 'Some error',
    };
    const updatedState = petReducer(initialState, action);
    expect(updatedState).toEqual(expectedState);
  });
  it('should test @pet/CLEAR_PET', () => {
    const expectedState = {
      currentPet: {},
      errors: '',
      loading: false,
    };
    const action = {
      type: '@pet/CLEAR_PET',
    };
    const updatedState = petReducer(initialState, action);
    expect(updatedState).toEqual(expectedState);
  });
});
