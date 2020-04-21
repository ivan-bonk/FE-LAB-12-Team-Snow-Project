import { PetProfile } from 'shared/models';

export interface StarterProps {
  match: {
    params: {
      id: string;
    };
  };
}

export interface RootState {
  pet: PetState;
}

interface PetState {
  currentPet: PetProfile;
  errors: string;
  loading: boolean;
}