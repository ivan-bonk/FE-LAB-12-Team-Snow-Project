import { AdditionalInfo, Characteristics, Observations } from './pet.models';
import { PetProfile } from '../../shared/models';

export interface PetProps {
  match: {
    params: {
      id: number;
    };
  };
}

export interface AdditionalProps {
  data: AdditionalInfo;
}

export interface AdditionalItemProps {
  title: string;
  content: string[];
}

export interface CharacteristicsProps {
  data: Characteristics;
}

export interface ObservationProps {
  data: Observations;
}

export interface RatingProps {
  rating: number;
}

export interface RootState {
  pet: PetState;
}

interface PetState {
  currentPet: PetProfile;
  errors: string | undefined;
  loading: boolean;
}
