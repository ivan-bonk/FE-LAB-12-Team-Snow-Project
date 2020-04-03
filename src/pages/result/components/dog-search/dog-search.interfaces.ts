import { PetProfile } from '../../../../shared/interfaces';

export interface DogSearchProps {
  renderPets: (searchString: string) => void;
  pets: PetProfile[];
}
