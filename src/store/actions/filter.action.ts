import { createCustomAction } from 'typesafe-actions';

export const filterAction = createCustomAction('FILTER', (data: {} | null) => {
  return { payload: data };
});
