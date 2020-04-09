import { createReducer } from 'typesafe-actions';
import { ComparisonHandlerState } from '../../../shared/components/add-pet-to-compare/add-pet-to-compare.interface';
import { removePet } from '../services/remove-pet-to-compare';
const initialState: ComparisonHandlerState = {
  idsToCompare: [],
};

export const comparisonHandlerReducer = createReducer(initialState)
  .handleAction('@comparison/ADD_COMPARISON_PET', (state: ComparisonHandlerState, action: { payload: string }) => {
    return { ...state, idsToCompare: [...state.idsToCompare, action.payload] };
  })
  .handleAction('@comparison/REMOVE_COMPARISON_PET', (state: ComparisonHandlerState, action: { payload: string }) => {
    return { ...state, idsToCompare: removePet(state.idsToCompare, action.payload) };
  });
