import {PetProfile} from '../shared/models';

export interface RootState {
  pet: petState;
}

export interface petState {
  currentPet: PetProfile|object;
  errors: string|undefined;
  loading: boolean;
}
