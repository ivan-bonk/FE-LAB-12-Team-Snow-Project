export interface PetNames {
  boys: string[];
  girls: string[];
}
export interface PetNamesGeneratorState {
  girlId: number;
  boyId: number;
  errors: string;
  loading: boolean;
  petNames: PetNames;
}
export interface State {
  nameGenerator: PetNamesGeneratorState;
}
