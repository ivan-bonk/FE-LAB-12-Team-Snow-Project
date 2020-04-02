export const ROUTES = {
  home: '/',
  addpet: '/addpet',
  result: '/result',
  pet: (id: string) => `/pet/${id}`,
  comparison: '/comparison/:ids',
  search: '/search',
  filter: '/filter',
};
