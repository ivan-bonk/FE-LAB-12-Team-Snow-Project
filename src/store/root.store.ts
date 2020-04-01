import rootReducer from './reducers/root.reducer';
import { saga } from './root.saga';
import { createStore, applyMiddleware } from 'redux';
import { watchPets } from './sagas/comparison.saga';
import {watchLoadPet} from './sagas/pet.saga';
import {composeWithDevTools} from 'redux-devtools-extension';

export const store = createStore(rootReducer, composeWithDevTools( applyMiddleware(saga) ));

saga.run(watchPets);
saga.run(watchLoadPet);

