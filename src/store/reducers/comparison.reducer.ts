import { createReducer } from 'typesafe-actions';
import {  actionType } from '../actions/comparison.action';

const initialState = {
    petsToCompare: [],
    error: undefined,
    loading: false
}

export default createReducer<any, actionType>(initialState, {
    '@comparison/PETS_BYID_SUCCESS': (state, action) => {
      return { ...state, loading: false, petsToCompare: action.payload };
    },
    '@comparison/PETS_BYID_FAILURE': (state, action) => {
      return { ...state, loading: false, error: action.payload };
    },
    '@comparison/PETS_BYID_REQUEST': (state, action) => {
      return { ...state, loading: true };
    },

  });

