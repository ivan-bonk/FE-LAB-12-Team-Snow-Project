import { Pet } from '../reducers/reducers.interfaces';

import { createReducer } from 'typesafe-actions';

type State = Pet | null;

export const initialState: Pet = {
  _id: 0,
  photos: [],
  breed: '',
  characteristics: {
    spandTime: '',
    outlay: '',
    size: '',
  },
};

export const careReducer = createReducer(initialState)
  .handleType('GET_PETS_SUCCESS', (state: Pet, action: { payload: Pet }) => (state = action.payload))
  .handleType('GET_PETS_FAILTURE', (state: null, action: { payload: Pet }) => (state = null));
