const initiatState = {
  data: {},
  petsToCompare: [],
  search: {},
};

export const rootReducer = (state: object = initiatState, action: any) => {
  switch (action.type) {
    case 'PUT_PETS':
      return {
        ...state,
        petsToCompare: action.payload.pets,
      };
    case 'SEARCH':
      return {
        search: action.payload,
      };
  }

  return state;
};
