import { rootReducer } from './root.reducer';
import { saga } from './root.saga';
import { createStore, applyMiddleware } from 'redux';

export const store = createStore(rootReducer, applyMiddleware(saga));
