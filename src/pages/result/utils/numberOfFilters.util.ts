import { FilterValues } from '../result.interfaces';

export const getNumberOfFilters = (filterValues: FilterValues): string => {
  let key: keyof FilterValues;
  let filterCounter = 0;

  for (key in filterValues) {
    if (filterValues[key]) {
      filterCounter++;
    }
  }

  return filterCounter ? `(${filterCounter})` : '';
};
