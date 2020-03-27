import { PUT_FETCHED_PETS } from './result/result.types';

const initiatState = {
  data: [],
};

export const rootReducer = (state = initiatState, action: any) => {

  switch (action.type) {
    case PUT_FETCHED_PETS: 
      return { ...state, ...action.payload  };
    default: 
      return state;
  }
};
