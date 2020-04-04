export interface CareBodyProps {
  breed?: string;
  weight?: string;
  numberWolk?: string;
  amountFood?: string;
  weightFood?: string;
  mediсalCheck?: string;
  additonal?: string;
}

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
  care: PetProfile[];
}

export interface FilterValues {
  carePrice: string;
  price: string;
}

export interface RootState {
  care: ResultStore;
  searchReducer: FilterValues;
}

export interface PetProfile {
  _id: string;
  breed: string;
  imgUrl: string[];
  characteristics: Characteristics;
  observations: Observations;
  additionalInfo: AdditionalInfo;
}

export interface Observations {
  country: string;
  lifetime: string;
  height: string;
  weight: string;
  price: string;
  carePrice: string;
  careTime: number;
}

export interface AdditionalInfo {
  about: string;
  specialties: string[];
  issues: string[];
}
