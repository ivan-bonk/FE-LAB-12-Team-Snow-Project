import {combineReducers} from 'redux';
import {petReducer} from './pet.reducer';

export default combineReducers({
    pet: petReducer,
})

