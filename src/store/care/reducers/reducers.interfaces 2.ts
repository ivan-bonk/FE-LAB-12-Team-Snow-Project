export interface Pet {
  _id: number;
  photos: [];
  breed: string;
  characteristics: {
    spandTime: string;
    outlay: string;
    size: string;
  };
}

export interface StoreData {
  data: Pet[];
}
