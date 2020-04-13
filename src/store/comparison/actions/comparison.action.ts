import { createAsyncAction, ActionType, action } from 'typesafe-actions';

import { PetsToCompareList } from 'pages/comparison/comparison.interface';

export const GetPetsById = createAsyncAction(
  '@comparison/PETS_BYID_REQUEST',
  '@comparison/PETS_BYID_SUCCESS',
  '@comparison/PETS_BYID_FAILURE',
)<string[], PetsToCompareList[], Error>();

export const clearListToCompare = () => action('@comparison/REMOVE_COMPARISON_LIST');

export const actions = { GetPetsById, clearListToCompare };

export type actionType = ActionType<typeof actions>;
