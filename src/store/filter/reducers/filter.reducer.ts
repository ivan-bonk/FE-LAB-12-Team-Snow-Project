import { createReducer } from 'typesafe-actions';
import { Data } from 'pages/filter/components/filter-body/bodyFilter.intarface';

export const initialState: Data | null = null;

const filterReducer = createReducer(initialState).handleType(
  'FILTER',
  (state: Data, action: { payload: Data }) => (state = action.payload),
);

export default filterReducer;
