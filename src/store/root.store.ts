import { rootReducer } from './root.reducer';
import { saga } from './root.saga';
import { createStore, applyMiddleware } from 'redux';
import { rootSaga } from './root.saga';

export const store = createStore(rootReducer, applyMiddleware(saga));

saga.run(rootSaga);
