import { combineReducers } from 'redux';

import { resultReducer } from './result/reducers/result.reducer';

export const rootReducer = combineReducers({
  resultReducer,
});
