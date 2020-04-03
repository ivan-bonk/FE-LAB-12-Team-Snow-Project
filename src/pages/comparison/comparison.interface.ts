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

export type ComparisonProps = {
  name: string;
  match: {
    params: {
      0: string;
    };
  };
};

export interface RootState {
  comparison: ComparisonState;
}

export interface ComparisonState {
  petsToCompare: Array<PetsToCompareList>;
  loading: boolean;
  error: any;
}
