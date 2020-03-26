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

// import { combineReducers } from 'redux';
// import searchReducer from './search.reducer';

// export const rootReducer = combineReducers({
//   search: searchReducer,
// });

// const initiatState = {
//   data: {},
// };

// export const rootReducer = (state = initiatState) => {
//   return state;
// };
