import { FilterValues } from '../result.interfaces';

const getFilterValue = (value: string) => {
  return value.slice(value.indexOf('=') + 1);
};

export const getUrlFilterValues = (url: string): FilterValues => {
  const valuesArray = url
    .slice(8)
    .split('&')
    .map(value => {
      return getFilterValue(value);
    });

  return {
    timeWolk: valuesArray[0],
    moneyPerMonth: valuesArray[1],
    timePerMonth: valuesArray[2],
    securityLevel: valuesArray[3],
    petSize: valuesArray[4],
    easyToTrain: valuesArray[5] === 'false' ? false : true,
    family: valuesArray[6] === 'false' ? false : true,
    apartment: valuesArray[7] === 'false' ? false : true,
    allergy: valuesArray[8] === 'false' ? false : true,
  };
};
