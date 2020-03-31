export interface Characteristics {
  spandTime: string;
  outlay: string;
  size: string;
}

export interface Pet {
  id: number;
  name: string;
  photos: [];
  characteristics: Characteristics;
}

export interface Data {
  data: Array<Pet>;
}

export interface RootState {
  resultReducer: Data;
}
