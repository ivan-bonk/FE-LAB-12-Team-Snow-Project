import { createReducer, ActionType } from 'typesafe-actions';
import * as Actions from '../actions/quiz.action';
import { Data } from '../../../pages/quiz-page/quiz-page.intarface';

export type ProfileAction = ActionType<typeof Actions>;

type State = Data;

const initialState: Data = {
  breed: '',
  birth: '',
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
