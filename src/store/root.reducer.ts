const initiatState = {
  data: {},
  petsToCompare: [],
};

export const rootReducer = (state: object = initiatState, action: any) => {
  switch(action.type){
    case "PUT_PETS": 
    return {
      ...state,
      petsToCompare: action.payload.pets
    }
  }

  return state;
};
