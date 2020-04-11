import { createReducer } from 'typesafe-actions';
import { NameGeneratorState, PetNames } from '../name-generator.models';
import { fetchPetNames } from '../actions/name-generator.actions';

const initialState: NameGeneratorState = {
  petNames: {},
  girlId: 0,
  boyId: 0,
  errors: '',
  loading: false,
};

export const nameGeneratorReducer = createReducer(initialState)
  .handleAction(fetchPetNames.success, (state: NameGeneratorState, action: { payload: PetNames }) => ({
    ...state,
    loading: false,
    petNames: action.payload,
  }))
  .handleAction(fetchPetNames.request, (state: NameGeneratorState) => ({ ...state, loading: true }))
  .handleAction(fetchPetNames.failure, (state: NameGeneratorState, action: { payload: string }) => ({
    ...state,
    loading: false,
    errors: action.payload,
  }))
  .handleAction('@name-generator/SET_BOY', (state: NameGeneratorState) => ({ ...state, boyId: state.boyId + 1 }))
  .handleAction('@name-generator/SET_GIRL', (state: NameGeneratorState) => ({ ...state, girlId: state.girlId + 1 }));
