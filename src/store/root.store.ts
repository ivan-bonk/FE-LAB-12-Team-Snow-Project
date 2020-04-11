import { rootReducer } from './root.reducer';
import { saga } from './root.saga';
import { createStore, applyMiddleware } from 'redux';
import { rootSaga } from './root.saga';

export let store = createStore(rootReducer, applyMiddleware(saga));

if (process.env.NODE_ENV === 'development') {
  const { composeWithDevTools } = require('redux-devtools-extension');
  store = createStore(rootReducer, composeWithDevTools(applyMiddleware(saga)));
}

saga.run(rootSaga);
