import { createReducer } from 'typesafe-actions';
import {PetState} from '../models'
import {fetchPetProfile} from '../action/pet.action';

const initialState:PetState = {
  currentPet: {},
  errors: undefined,
  loading: false
}

export const petReducer = createReducer(initialState)
.handleAction(fetchPetProfile.success, (state:PetState, action:any) => ({ ...state, loading: false, currentPet: action.payload }))
.handleAction(fetchPetProfile.request, (state:PetState, action:any) => ({ ...state, loading: true }))
.handleAction(fetchPetProfile.failure, (state:PetState, action:any) => ({ ...state, loading: false, errors: action.payload }))

