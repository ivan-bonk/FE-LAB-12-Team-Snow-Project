import { combineReducers } from 'redux';
import { resultReducer } from './result/reducers/result.reducer';
import filterReducer from './filter.reducer';
import { petReducer } from './reducers/pet.reducer';
import comparisonReducer from './reducers/comparison.reducer';

export const rootReducer = combineReducers({
  filter: filterReducer,
  pet: petReducer,
  comparison: comparisonReducer,
  result: resultReducer,
});
