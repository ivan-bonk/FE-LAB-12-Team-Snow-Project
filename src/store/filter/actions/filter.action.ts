import { createCustomAction } from 'typesafe-actions';
import { Data } from '../../../pages/filter/components/filter-body/bodyFilter.intarface';

export const filterAction = createCustomAction('FILTER', (data: Data | null) => {
  return { payload: data };
});
