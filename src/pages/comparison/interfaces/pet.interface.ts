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

export interface ProfileProps {
  breed: string;
  imgUrl: string;
}

export interface RateProps {
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
  comparison: ComparisonState;
}

export interface ComparisonState {
  petsToCompare: Array<PetsToCompareList>;
  loading: boolean;
  error: any;
}

export interface CharacteristicProps {
  data: PetsToCompareList;
}
