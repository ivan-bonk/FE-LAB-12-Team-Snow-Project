import { createReducer } from 'typesafe-actions';
import { fetchPetsAsync } from '../actions/result.actions';
import { StoreData } from './reducers.interfaces';
import { PetProfile } from 'shared/interfaces/pet-profile.interface';

export const initiatState = {
  resultStore: [],
  errors: '',
};

export const resultReducer = createReducer(initiatState)
  .handleAction(fetchPetsAsync.request, (state: StoreData) => ({ ...state }))
  .handleAction(fetchPetsAsync.success, (state: StoreData, action: { payload: PetProfile[] }) => {
    return { ...state, resultStore: action.payload };
  })
  .handleAction(fetchPetsAsync.failure, (state: StoreData, action: { payload: string }) => ({
    ...state,
    errors: action.payload,
  }));
