import {createAsyncAction, ActionType} from 'typesafe-actions';

import {PetsToCompareList} from '../../pages/comparison/interfaces/pet.interface';

export const asyncGetPeysById = createAsyncAction(
  '@comparison/PETS_BYID_REQUEST',
  '@comparison/PETS_BYID_SUCCESS',
  '@comparison/PETS_BYID_FAILURE'
)<string[], PetsToCompareList[], Error>();
export const actions = {asyncGetPeysById};

export type actionType = ActionType<typeof actions>;
