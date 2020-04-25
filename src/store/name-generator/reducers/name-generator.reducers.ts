import { createReducer } from 'typesafe-actions';
import { NameGeneratorState, PetNames } from '../name-generator.models';
import { fetchPetNames } from '../actions/name-generator.actions';

export const initialState: NameGeneratorState = {
  petNames: {
    boys: [],
    girls: [],
  },
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
  .handleAction('@name-generator/SET_BOY', (state: NameGeneratorState) => {
    const currentIndex: number = state.boyId;
    const lastIndex: number = state.petNames.boys.length - 1;
    const nextIndex: number = currentIndex === lastIndex ? 0 : currentIndex + 1;
    return { ...state, boyId: nextIndex };
  })
  .handleAction('@name-generator/SET_GIRL', (state: NameGeneratorState) => {
    const currentIndex: number = state.girlId;
    const lastIndex: number = state.petNames.girls.length - 1;
    const nextIndex: number = currentIndex === lastIndex ? 0 : currentIndex + 1;
    return { ...state, girlId: nextIndex };
  });
