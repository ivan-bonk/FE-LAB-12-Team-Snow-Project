import { PetProfile } from 'shared/interfaces';

export interface Characteristics {
  spandTime: string;
  outlay: string;
  size: string;
}

export interface Pet {
  _id: number;
  breed: string;
  photos: [];
  characteristics: Characteristics;
}

export interface ResultStore {
  resultStore: PetProfile[];
}

export interface FilterValues {
  carePrice: string;
  price: string;
}

export interface RootState {
  result: ResultStore;
  searchReducer: FilterValues;
}
