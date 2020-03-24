const initiatState = {
  data: {},
  pets_to_compare: [],
};

export const rootReducer = (state: object = initiatState, action: any) => {
  switch(action.type){
    case "PUT_PETS": 
    return {
      ...state,
      pets_to_compare: action.payload.pets
    }
  }

  return state;
};
