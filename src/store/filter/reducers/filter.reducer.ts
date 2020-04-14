import { createReducer, ActionType } from 'typesafe-actions';
import * as Actions from '../actions/filter.action';
import { Data } from 'pages/filter/components/filter-body/bodyFilter.intarface';

export type ProfileAction = ActionType<typeof Actions>;

type State = Data | null;

const initialState: Data | null = null;

const filterReducer = createReducer<State, ProfileAction>(initialState).handleType(
  'FILTER',
  (state, action) => (state = action.payload),
);

export default filterReducer;
