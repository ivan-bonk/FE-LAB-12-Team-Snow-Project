import { createReducer, ActionType } from 'typesafe-actions';
import * as Actions from '../actions/filter.action';
import { Data } from '../../../pages/filter/components/filter-body/bodyFilter.intarface';

export type ProfileAction = ActionType<typeof Actions>;

type State = Data | null;

const initialState: Data = {
  timeWolk: '0',
  moneyPerMonth: '0',
  timePerMonth: '0',
  securityLevel: '0',
  petSize: '0',
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
