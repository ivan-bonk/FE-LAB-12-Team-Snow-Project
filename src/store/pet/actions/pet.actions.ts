import { createAsyncAction, action } from 'typesafe-actions';
import { PetProfile } from 'shared/models';

export const fetchPetProfile = createAsyncAction(
  '@pet/FETCH_REQUEST',
  '@pet/FETCH_SUCCESS', 
  '@pet/FETCH_ERROR'
  )<string,PetProfile,string>();

export const clearPetProfile = action('@pet/CLEAR_PET');