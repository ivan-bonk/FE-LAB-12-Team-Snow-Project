import { createAsyncAction } from 'typesafe-actions';
import { PetProfile } from '../../../shared/models';

export const fetchPetProfile = createAsyncAction('FETCH_REQUEST', 'FETCH_SUCCESS', 'FETCH_ERROR')<
  number,
  PetProfile,
  string
>();
