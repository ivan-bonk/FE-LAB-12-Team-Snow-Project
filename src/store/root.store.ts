import rootReducer from './reducers/root.reducer';
import { saga } from './root.saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootSaga } from './root.saga';

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(saga)));

saga.run(rootSaga);
