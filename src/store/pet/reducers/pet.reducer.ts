import { createReducer } from 'typesafe-actions';
import { PetState } from '../pet.models';
import { fetchPetProfile } from '../actions/pet.actions';
import { PetProfile } from 'shared/models';

const initialState: PetState = {
  currentPet: {},
  errors: '',
  loading: false,
};

export const petReducer = createReducer(initialState)
  .handleAction(fetchPetProfile.success, (state: PetState, action: { payload: PetProfile }) => ({
    ...state,
    loading: false,
    currentPet: action.payload,
  }))
  .handleAction(fetchPetProfile.request, (state: PetState) => ({ ...state, loading: true }))
  .handleAction(fetchPetProfile.failure, (state: PetState, action: { payload: string }) => ({
    ...state,
    loading: false,
    errors: action.payload,
  }))
  .handleAction('@pet/CLEAR_PET', (state: PetState) => ({ ...state, currentPet: {} }));
