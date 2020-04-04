import { action } from 'typesafe-actions';

export const addComparisonPet = (id: string) =>
  action('@comparison/ADD_COMPARISON_PET',  id );

export const removeComparisonPet = (id: string) => 
  action('@comparison/REMOVE_COMPARISON_PET',  id )
