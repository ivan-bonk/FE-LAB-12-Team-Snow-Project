import { PetProfile } from '../../shared/interfaces';

interface ResultStore {
  resultStore: PetProfile[];
}

export interface RootState {
  result: ResultStore;
}

export interface Data {
  breed: string;
  birth: string;
  weight: number;
  walkNumber: number;
  mealNumber: number;
  mealWeight: number;
  medChekUp: number;
}
