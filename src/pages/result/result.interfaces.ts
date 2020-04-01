import { PetProfile } from '../../shared/interfaces';

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

export interface Data {
  data: Array<PetProfile>;
}

export interface FilterValues {
  carePrice: string;
  price: string;
}

export interface RootState {
  resultReducer: Data;
  searchReducer: FilterValues;
}
