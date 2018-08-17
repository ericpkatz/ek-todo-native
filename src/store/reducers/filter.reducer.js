const reducer = (state = { hideComplete: false }, action)=> {
  switch(action.type){
    case 'SET_FILTER':
      state = action.filter;
  }
  return state;
};

export default reducer;
