const reducer = (state = [], action)=> {
  switch(action.type){
    case 'SET_TODOS':
      state = action.todos;
      break;
  }
  return state;
  
}

export default reducer;
