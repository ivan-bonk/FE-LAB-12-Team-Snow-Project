import { createReducer } from 'typesafe-actions';
import { fetchPetsAsync } from '../actions/result.actions';
import { StoreData } from './reducers.interfaces';
import { Pet } from 'pages/result/result.interfaces';

const initiatState = {
  resultStore: [],
};

export const resultReducer = createReducer(initiatState).handleAction(
  fetchPetsAsync.success,
  (state: StoreData, action: { payload: Pet[] }) => {
    return { ...state, resultStore: action.payload };
  },
);
