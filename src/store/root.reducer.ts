const initiatState = {
  data: {},
  petsToCompare: [],
  filter: {},
};

export const rootReducer = (state: object = initiatState, action: any) => {
  switch (action.type) {
    case 'PUT_PETS':
      return {
        ...state,
        petsToCompare: action.payload.pets,
      };
    case 'FILTER':
      return {
        ...state,
        filter: action.payload,
      };
  }

  return state;
};
