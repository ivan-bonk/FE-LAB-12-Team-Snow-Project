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
  
  export interface PetProfile {
    _id: number;
    breed: string;
    imgUrl: string[],
    characteristics: Characteristics;
    observations: Observations;
    additionalInfo: AdditionalInfo;
  }