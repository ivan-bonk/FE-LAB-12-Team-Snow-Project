export const ROUTES = {
  home: '/',
  auth: '/auth',
  user: '/user/:id',
  addpet: '/addpet',
  result: '/result',
  registration: '/registration',
  pet: (id: string) => `/pet/:id${id}`,
  comparison: '/comparison/:ids',
  search: '/search',
  filter: '/filter',
};
