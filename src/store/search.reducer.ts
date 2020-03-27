const searchReducer = (state = {}, action: any): any => {
  switch (action.type) {
    case 'SEARCH':
      return (state = action.payload);

    default:
      return state;
  }
};

export default searchReducer;
