import { createAsyncAction } from 'typesafe-actions';
import { Pet } from '../reducers/reducers.interfaces';

export const getPets = createAsyncAction('GET_PETS_REQUEST', 'GET_PETS_SUCCESS', 'GET_PETS_FAILTURE')<
  void,
  Pet,
  string
>();
