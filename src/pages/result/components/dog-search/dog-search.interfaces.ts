import { PetProfile } from '../../../../shared/interfaces';

export interface PetsSearch {
  renderPets: (searchString: string) => void;
  pets: Array<PetProfile>;
}
