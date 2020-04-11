export const ROUTES = {
  home: '/',
  addpet: '/addpet',
  result: '/result',
  pet: {
    path: '/pet/:id',
    route: (id: string) => `/pet/${id}`,
  },
  starterPack: {
    path: '/starterPack/:id',
    route: (id: string) => `/starterPack/${id}`,
  },
  comparison: '/comparison/*',
  search: '/search',
  filter: '/filter',
  quiz: '/quiz-page',
  care: '/care',
};
