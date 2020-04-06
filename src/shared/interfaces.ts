export interface Characteristics {
  popularity: number;
  training: number;
  size: number;
  brain: number;
  security: number;
  childFriendly: number;
  agility: number;
  problematic: number;
}

export interface Observations {
  country: string;
  lifetime: string;
  height: string;
  wiidth: string;
  price: string;
  carePrice: string;
  careTime: string;
  size: string;
}

export interface AdditionalInfo {
  about: string;
  specialities: string[];
  issues: string[];
}

export interface PetProfile {
  _id: string;
  breed: string;
  imgUrl: [];
  characteristics: Characteristics;
  observations: Observations;
  additionalInfo: AdditionalInfo;
}
