import { Observations } from 'shared/interfaces';

export interface DogInfoProps {
  id: string;
  name: string;
  observations: Observations;
  images: string[];
}
