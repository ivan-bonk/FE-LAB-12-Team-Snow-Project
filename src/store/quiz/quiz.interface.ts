export interface Breeds {
  breeds: string[];
}
export interface BreedsState {
  breeds: Breeds | {};
  errors: string;
  loading: boolean;
}
