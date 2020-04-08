import { PetProfile } from '../../shared/interfaces';

interface ResultStore {
  resultStore: PetProfile[];
}

export interface RootState {
  result: ResultStore;
}

export interface Data {
  breed: string | null;
  birth: string | null;
  weight: number | null;
  walkNumber: number | null;
  mealNumber: number | null;
  mealWeight: number | null;
  medChekUp: number | null;
}
