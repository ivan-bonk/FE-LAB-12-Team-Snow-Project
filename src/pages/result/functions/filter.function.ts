import { FilterValues } from '../result.interfaces';
import { PetProfile } from '../../../shared/interfaces';

export const getFiltredPets = (pets: PetProfile[], filterValues: FilterValues): PetProfile[] => {
  const notation = 10;

  const getComparisonResult = (petValue: string, userInputValue: string): boolean => {
    const parsedUserInputValue = parseInt(userInputValue, notation);

    const petMinValue = parseInt(petValue.toString().match(/\d+/g)![0], notation);

    //in this case index have to be 1, but some values in DB haven't range value yet
    const petMaxValue = parseInt(petValue.toString().match(/\d+/g)![0], notation);

    return (
      (parsedUserInputValue >= petMinValue && parsedUserInputValue <= petMaxValue) ||
      parsedUserInputValue >= petMaxValue
    );
  };

  return pets.filter((pet: PetProfile) => {
    let key: keyof FilterValues;

    for (key in filterValues) {
      if (filterValues[key] === 'any' || !filterValues[key] || !parseInt(filterValues[key], notation)) continue;

      if (!getComparisonResult(pet.observations[key], filterValues[key])) {
        return false;
      }
    }

    return true;
  });
};
