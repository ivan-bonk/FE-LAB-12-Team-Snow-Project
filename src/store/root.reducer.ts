import { createReducer } from 'typesafe-actions';

type State = {} | [];
type Action = { type: 'FILTER'; payload: {} } | { type: 'PUT_PETS'; payload: any };

export const rootReducer = createReducer<State, Action>(0)
  .handleType('FILTER', (state, action) => {
    return { ...state, filter: action.payload };
  })
  .handleType('PUT_PETS', (state, action) => {
    return { ...state, petsToCompare: action.payload.pets };
  });
