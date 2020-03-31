import { createReducer } from 'typesafe-actions';

type State = {};
type Action = { type: 'FILTER'; payload: {} };

const filterReducer = createReducer<State, Action>(0).handleType('FILTER', (state, action) => (state = action.payload));

export default filterReducer;
