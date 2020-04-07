import { FilterValues, PetValues, PetCharacteristicType } from '../result.interfaces';
import { PetProfile } from 'shared/interfaces';

export const getFiltredPets = (pets: PetProfile[], filterValues: FilterValues): PetProfile[] => {
  const notation = 10;
  const minutesInHour = 60;
  const percentagesStep = 20;

  const getDeepComparisonResult = (petValue: PetCharacteristicType, userInputValue: PetCharacteristicType): boolean => {
    const low = 2,
      average = 3,
      high = 4;
    const petValueType = typeof petValue;

    if (petValueType === 'string' || petValueType === 'boolean') {
      return petValue === userInputValue;
    }
    switch (userInputValue) {
      case 'low':
        return petValue <= low;
      case 'average':
        return petValue === average;
      case 'high':
        return petValue >= high;
      default:
        return false;
    }
  };

  const getComparisonResult = (petValue: PetCharacteristicType, userInputValue: PetCharacteristicType): boolean => {
    const parsedUserInputValue = parseInt(userInputValue.toString(), notation);

    if (!parsedUserInputValue) {
      return getDeepComparisonResult(petValue, userInputValue);
    }

    return parsedUserInputValue >= petValue;
  };

  return pets.filter((pet: PetProfile) => {
    let key: keyof FilterValues;

    const petValues: PetValues = {
      timeWolk: pet.observations.careTime * minutesInHour,
      moneyPerMonth: pet.observations.carePrice,
      timePerMonth: pet.observations.careComplications,
      securityLevel: pet.characteristics.security * percentagesStep,
      petSize: pet.characteristics.size,
      easyToTrain: pet.ownerInfo.easyTrain,
      family: pet.ownerInfo.familyFit,
      apartment: pet.ownerInfo.apartmentFit,
      allergy: pet.ownerInfo.hypoallergenicity,
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
