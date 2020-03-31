import { rootReducer } from './root.reducer';
import { saga } from './root.saga';
import { createStore, applyMiddleware } from 'redux';
import { watchFetchPets } from './result/sagas/result.saga';

export const store = createStore(rootReducer, applyMiddleware(saga));

saga.run(watchFetchPets);
