import { createAsyncAction } from 'typesafe-actions';
import {PetProfile} from '../../shared/models';
import {FETCH_REQUEST,FETCH_SUCCESS,FETCH_ERROR} from '../types';

export const fetchPetProfile = createAsyncAction(FETCH_REQUEST,FETCH_SUCCESS,FETCH_ERROR
)<number, PetProfile, string>();