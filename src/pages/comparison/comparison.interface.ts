export interface PetsToCompareList {
  name: string;
  pets: PetToCompare[];
}

export interface PetToCompare {
  id: string;
  breed: string;
  imgUrl: string;
  value: number;
  textValue?: string;
  type: boolean;
}

export interface RootState {
  comparison: ComparisonState;
}

export interface ComparisonState {
  petsToCompare: PetsToCompareList[];
  loading: boolean;
  error: any;
}
