import { PetProfile } from 'shared/interfaces/pet-profile.interface';

export interface StoreData {
  data: PetProfile[];
  errors: string;
}
