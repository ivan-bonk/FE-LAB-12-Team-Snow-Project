import { createAsyncAction, ActionType } from 'typesafe-actions';

import { PetsToCompareList } from 'pages/comparison/comparison.interface';

export const GetPetsById = createAsyncAction(
  '@comparison/PETS_BYID_REQUEST',
  '@comparison/PETS_BYID_SUCCESS',
  '@comparison/PETS_BYID_FAILURE',
)<string[], PetsToCompareList[], Error>();

export const actions = { GetPetsById };

export type actionType = ActionType<typeof actions>;
