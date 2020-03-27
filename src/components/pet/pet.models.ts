export interface Characteristics {
  popularity: number;
  trainings: number;
  size: number;
  brain: number;
  security: number;
  childrens: number;
  agility: number;
  problems: number;
}

export interface Observations {
  country: string;
  life: string;
  height: string;
  weight: string;
  price: string;
  carePrice: string;
  careTime: number;
}

export interface AdditionalInfo {
  about: string;
  specialties: string;
  issues: string;
}

export interface PetProfile {
  id: number;
  breed: string;
  characteristics: Characteristics;
  observations: Observations;
  additionalInfo: AdditionalInfo;
}
