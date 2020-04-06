import { FilterValues } from '../result.interfaces';
import { PetProfile } from '../../../shared/interfaces';

export const getFiltredPets = (pets: PetProfile[], filterValues: FilterValues): PetProfile[] => {
  const notation = 10;

  const getComplicatedComparisonResult = (petValue: any, userInputValue: any): boolean => {
    const low = 2,
      average = 3,
      high = 4;

    if (typeof userInputValue === 'boolean') {
      return petValue >= average;
    } else if (typeof userInputValue === 'string') {
      switch (userInputValue) {
        case 'low':
          return petValue <= low;
        case 'averege':
          return petValue === average;
        case 'high':
          return petValue >= high;
        default:
          return false;
      }
    }

    return false;
  };

  const getComparisonResult = (petValue: any, userInputValue: any): boolean => {
    const parsedUserInputValue = parseInt(userInputValue, notation);

    if (!parsedUserInputValue) {
      return getComplicatedComparisonResult(petValue, userInputValue);
    }

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

    const petValues: any = {
      moneyPerMonth: pet.observations.carePrice,
      petSize: pet.characteristics.size,
      easyToTrain: pet.characteristics.training,
      family: pet.characteristics.childFriendly,
    };

    for (key in filterValues) {
      const defaultFormValue = filterValues[key] === 'any' || !filterValues[key] || filterValues[key] === '0';

      if (defaultFormValue) {
        continue;
      }

      if (!getComparisonResult(petValues[key], filterValues[key])) {
        return false;
      }
    }

    return true;
  });
};
