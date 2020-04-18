export interface PetNames {
  boys: string[];
  girls: string[];
}
export interface NameGeneratorState {
  petNames: PetNames;
  boyId: number;
  girlId: number;
  errors: string;
  loading: boolean;
}
