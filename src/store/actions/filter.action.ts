export const searchAction = (data: any): any => {
  return {
    type: 'FILTER',
    payload: data,
  };
};