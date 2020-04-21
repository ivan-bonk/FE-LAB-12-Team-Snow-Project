import { Pet } from '../reducers/reducers.interfaces';

import { createReducer, ActionType } from 'typesafe-actions';
import * as Actions from '../actions/care.actions';

export type ProfileAction = ActionType<typeof Actions>;

type State = Pet | null;

const initialState: Pet = {
  _id: 0,
  photos: [],
  breed: '',
  characteristics: {
    spandTime: '',
    outlay: '',
    size: '',
  },
};

export const careReducer = createReducer<State, ProfileAction>(initialState)
  .handleType('GET_PETS_SUCCESS', (state, action) => (state = action.payload))
  .handleType('GET_PETS_FAILTURE', (state, action) => (state = null));
