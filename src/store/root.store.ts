import { rootReducer } from './root.reducer';
import { saga } from './root.saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(saga)));
