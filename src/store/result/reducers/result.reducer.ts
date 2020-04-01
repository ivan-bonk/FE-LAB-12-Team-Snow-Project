import { createReducer } from 'typesafe-actions';
import { fetchPetsAsync } from '../actions/result.actions';
import { StoreData } from './reducers.interfaces';
import { Pet } from '../../../pages/result/result.interfaces';

const initiatState = {
  data: [],
};

export const resultReducer = createReducer(initiatState).handleAction(
  fetchPetsAsync.success,
  (state: StoreData, action: { payload: Array<Pet> }) => {
    return { ...state, data: action.payload };
  },
);
