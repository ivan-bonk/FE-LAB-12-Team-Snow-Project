import { createAsyncAction } from 'typesafe-actions';

import { PetProfile } from 'shared/interfaces/pet-profile.interface';

export const fetchPetsAsync = createAsyncAction('FETCH_PETS_REQUEST', 'FETCH_PETS_SUCCESS', 'FETCH_PETS_FAILTURE')<
  void,
  PetProfile[],
  string
>();
