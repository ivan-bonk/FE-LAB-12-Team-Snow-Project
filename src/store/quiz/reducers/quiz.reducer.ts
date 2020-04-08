import { createReducer, ActionType } from 'typesafe-actions';
import * as Actions from '../actions/quiz.action';
import { Data } from '../../../pages/quiz-page/quiz-page.intarface';

export type ProfileAction = ActionType<typeof Actions>;

type State = Data | null;

const initialState: Data = {
  breed: null,
  birth: null,
  weight: null,
  walkNumber: null,
  mealNumber: null,
  mealWeight: null,
  medChekUp: null,
};

export const quizReducer = createReducer<State, ProfileAction>(initialState).handleType(
  'COMPERE',
  (state, action) => (state = action.payload),
);
