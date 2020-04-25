import { createReducer, ActionType } from 'typesafe-actions';
import * as Actions from '../actions/quiz.action';
import { Data } from 'pages/quiz-page/quiz-page.intarface';

import { BreedsState } from '../quiz.interface';
import { fetchPetBreeds } from '../actions/quiz.action';

export type ProfileAction = ActionType<typeof Actions>;

type State = Data;

const initialState: Data = {
  breed: '',
  weight: 0,
  walkNumber: 0,
  mealNumber: 0,
  mealWeight: 0,
  medChekUp: 0,
};

export const quizReducer = createReducer<State, ProfileAction>(initialState).handleType(
  'COMPERE',
  (state, action) => (state = action.payload),
);

export type BreedsAction = ActionType<typeof Actions>;

type StateBreed = BreedsState;

export const initialStateBreeds: BreedsState = {
  breeds: [],
  errors: '',
  loading: false,
};

export const BreedReducer = createReducer(initialStateBreeds)
  .handleAction(fetchPetBreeds.success, (state: BreedsState, action: { payload: BreedsState }) => ({
    ...state,
    loading: false,
    breeds: action.payload,
  }))
  .handleAction(fetchPetBreeds.request, (state: BreedsState) => ({ ...state, loading: true }))
  .handleAction(fetchPetBreeds.failure, (state: BreedsState, action: { payload: BreedsState }) => ({
    ...state,
    loading: false,
    errors: action.payload,
  }));
