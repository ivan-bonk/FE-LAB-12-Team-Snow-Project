import { createCustomAction } from 'typesafe-actions';

export const filterAction = createCustomAction('FILTER', (data: {}) => {
  return { payload: data };
});
