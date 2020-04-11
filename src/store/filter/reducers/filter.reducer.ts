import { createReducer, ActionType } from 'typesafe-actions';
import * as Actions from '../actions/filter.action';
import { Data } from 'pages/filter/components/filter-body/bodyFilter.intarface';

export type ProfileAction = ActionType<typeof Actions>;

type State = Data | null;

const initialState: Data = {
  timeWolk: '40',
  moneyPerMonth: '360',
  timePerMonth: '0',
  securityLevel: '20',
  petSize: '0',
  defaultValue: '0',
  easyToTrain: false,
  family: false,
  apartment: false,
  allergy: false,
};

const filterReducer = createReducer<State, ProfileAction>(initialState).handleType(
  'FILTER',
  (state, action) => (state = action.payload),
);

export default filterReducer;
