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

// export interface FilterValues {
//   timeWolk: string;
//   moneyPerMonth: string;
//   timePerMounth: string;
//   securityLevel: string;
//   size: string;
//   easyToTrain: boolean;
//   family: boolean;
//   apartment: boolean;
//   allergy: boolean;
// }

export interface FilterValues {
  carePrice: string;
  careTime: string;
}

export interface RootState {
  resultReducer: Data;
  searchReducer: FilterValues;
}
