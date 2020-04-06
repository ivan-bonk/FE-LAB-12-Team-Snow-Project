export const ROUTES = {
  home: '/',
  addpet: '/addpet',
  result: '/result',
  pet: {
    path: '/pet/:id',
    route: (id: string) => `/pet/${id}`
  },
  comparison: '/comparison/*',
  search: '/search',
  filter: '/filter',
  petCare: '/petCare',
};
