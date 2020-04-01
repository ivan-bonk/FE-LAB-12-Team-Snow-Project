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

export interface ProfileInterface {
  breed: string;
  imgUrl: string;
}

export interface RateInterface {
  rate: number;
}

export type ComparisonProps = {
  name: string;
  match: {
    params: {
      ids: string;
    };
  };
};

export interface RootState {
  comparison: comparisonState;
}

interface comparisonState {
  petsToCompare: Array<PetsToCompareList>;
  loading: boolean;
  error: any;
}

export interface P {
  data: PetsToCompareList;
}
