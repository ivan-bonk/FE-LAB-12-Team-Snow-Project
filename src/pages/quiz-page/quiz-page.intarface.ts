import { PetProfile } from 'shared/interfaces';

interface ResultStore {
  resultStore: PetProfile[];
  errors: string
}

export interface RootState {
  result: ResultStore;
}

export interface Data {
  breed: string;
  weight: number;
  walkNumber: number;
  mealNumber: number;
  mealWeight: number;
  medChekUp: number;
}
