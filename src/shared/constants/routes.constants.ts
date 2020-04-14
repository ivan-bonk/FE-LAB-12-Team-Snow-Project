export const ROUTES = {
  home: '/',
  result: '/result',
  pet: {
    path: '/pet/:id',
    route: (id: string) => `/pet/${id}`,
  },
  starterPack: {
    path: '/starter-pack/:id',
    route: (id: string) => `/starter-pack/${id}`,
  },
  comparison: '/comparison/*',
  filter: '/filter',
  quiz: '/quiz-page',
  care: '/care',
};
