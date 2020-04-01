import {PetProfile} from '../shared/models';

export interface RootState {
  pet: PetState;
}

export interface PetState {
  currentPet: PetProfile|object;
  errors: string|undefined;
  loading: boolean;
}
