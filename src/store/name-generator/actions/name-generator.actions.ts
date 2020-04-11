import { createAsyncAction, action } from 'typesafe-actions';
import { PetNames } from '../name-generator.models';

export const fetchPetNames = createAsyncAction(
  '@name-generator/FETCH_REQUEST',
  '@name-generator/FETCH_SUCCESS',
  '@name-generator/FETCH_ERROR',
)<void, PetNames, string>();
export const setBoyName = action('@name-generator/SET_BOY');
export const setGirlName = action('@name-generator/SET_GIRL');
