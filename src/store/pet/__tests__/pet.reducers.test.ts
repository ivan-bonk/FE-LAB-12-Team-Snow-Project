import { petReducer } from 'store/pet/reducers/pet.reducer';
import { petProfile } from '../mocks';
import {initialState} from '../reducers/pet.reducer';
import {fetchPetProfile, clearPetProfile} from '../actions/pet.actions';

describe('test pet reducer', () => {
  it('should test @pet/FETCH_REQUEST', () => {
    const expectedState = {
      currentPet: {},
      errors: '',
      loading: true,
    };
    const action = {
      type: fetchPetProfile.request,
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
      type: fetchPetProfile.success,
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
      type: fetchPetProfile.failure,
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
      type: clearPetProfile.type,
    };
    const updatedState = petReducer(initialState, action);
    expect(updatedState).toEqual(expectedState);
  });
});
