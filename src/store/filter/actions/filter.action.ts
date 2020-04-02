import { createCustomAction } from 'typesafe-actions';
import { Data } from '../../../pages/comparison/interfaces/filter.interface';

export const filterAction = createCustomAction('FILTER', (data: Data | null) => {
  return { payload: data };
});
