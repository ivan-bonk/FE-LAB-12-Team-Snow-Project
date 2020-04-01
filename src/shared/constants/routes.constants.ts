export const ROUTES = {
  home: '/',
  user: '/user/:id',
  addpet: '/addpet',
  result: '/result',
  pet: (id: string) => `/pet/${id}`,
  comparison: '/comparison/:ids',
  search: '/search',
  filter: '/filter',
};
