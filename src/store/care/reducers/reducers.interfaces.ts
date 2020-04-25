export interface Pet {
  _id: string;
  photos?: [];
  breed: string;
  characteristics: {
    spandTime?: string;
    outlay?: string;
    size: number;
  };
}

export interface StoreData {
  data: Pet[];
}

export interface PetProfile {
  __v: number;
  _id: string;
  additionalInfo: {
    about: string;
    issues: string[];
    specialties: string[];
  };
  breed: string;
  characteristics: {
    agility: number;
    brain: number;
    childFriendly: number;
    popularity: number;
    problematic: number;
    security: number;
    size: number;
    training: number;
  };
  imgUrl: string[];
}
