import { PetProfile } from 'shared/interfaces';

export interface ResultStore {
  resultStore: PetProfile[];
  errors: string;
}

export interface RootState {
  result: ResultStore;
  filter: FilterValues;
}

export interface FilterValues {
  timeWolk: string;
  moneyPerMonth: string;
  timePerMonth: string;
  securityLevel: string;
  petSize: string;
  easyToTrain: boolean;
  family: boolean;
  apartment: boolean;
  allergy: boolean;
}

export interface PetValues {
  timeWolk: number;
  moneyPerMonth: number;
  timePerMonth: string;
  securityLevel: number;
  petSize: number;
  easyToTrain: boolean;
  family: boolean;
  apartment: boolean;
  allergy: boolean;
}

export interface ResultProps {
  location: {
    search: string;
  };
}

// I know that it isn't Okay.
// I don't know how to change it yet.(about pipes --> '|')
export type PetCharacteristicType = string | boolean | number;
