import { combineReducers } from 'redux';

import comparisonReducer from './comparison.reducer';

export default combineReducers({
  comparison: comparisonReducer,
});
