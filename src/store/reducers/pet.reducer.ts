import { createReducer } from 'typesafe-actions';
import {petState} from '../models'
import {fetchPetProfile} from '../actions/pet.action';

const initialState:petState = {
  currentPet: {},
  errors: undefined,
  loading: false
}

export const petReducer = createReducer(initialState)
.handleAction(fetchPetProfile.success, (state:petState, action:any) => ({ ...state, loading: false, currentPet: action.payload }))
.handleAction(fetchPetProfile.request, (state:petState, action:any) => ({ ...state, loading: true }))
.handleAction(fetchPetProfile.failure, (state:petState, action:any) => ({ ...state, loading: false, errors: action.payload }))

