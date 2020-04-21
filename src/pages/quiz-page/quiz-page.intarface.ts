import { PetProfile } from 'shared/interfaces';

interface ResultStore {
  resultStore: PetProfile[];
  errors: string;
}

export interface Breeds {
  breeds: string[];
}
export interface RootState {
  result: ResultStore;
  breeds: Breeds;
}

export interface Data {
  breed: string;
  weight: number;
  walkNumber: number;
  mealNumber: number;
  mealWeight: number;
  medChekUp: number;
}
