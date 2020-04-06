import { PetProfile } from '../../shared/interfaces';

export interface ResultStore {
  resultStore: PetProfile[];
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
