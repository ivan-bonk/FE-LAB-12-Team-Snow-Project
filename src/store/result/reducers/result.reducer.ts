import { createReducer } from 'typesafe-actions';
import { fetchPetsAsync } from '../actions/result.actions';
import { StoreData } from './reducers.interfaces';
import { PetProfile } from 'shared/interfaces/pet-profile.interface';

const initiatState = {
  resultStore: [],
  errors: '',
};

export const resultReducer = createReducer(initiatState)
  .handleAction(fetchPetsAsync.success, (state: StoreData, action: { payload: PetProfile[] }) => {
    return { ...state, resultStore: action.payload };
  })
  .handleAction(fetchPetsAsync.failure, (state: StoreData, action: { payload: string }) => ({
    ...state,
    errors: action.payload,
  }));
