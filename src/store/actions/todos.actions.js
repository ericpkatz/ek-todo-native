import { setItem, getItem } from '../localStore';
const fetchTodos = ()=> {
  return async (dispatch)=> {
    const todos = await getItem('TODOS', []);
    dispatch({ type: 'SET_TODOS', todos});

  }
};

const createTodo = (todo)=> {
  return async(dispatch, getState)=> {
    const todos = [...getState().todos, todo];
    await setItem('TODOS', todos);
    dispatch({ type: 'SET_TODOS', todos});
  }
};

const updateTodo = (todo)=> {
  return async(dispatch, getState)=> {
    const todos = getState().todos.map(_todo => _todo.id !== todo.id ? _todo : todo); 
    await setItem('TODOS', todos);
    dispatch({ type: 'SET_TODOS', todos});

  }
};

const deleteTodo = (todo)=> {
  return async(dispatch, getState)=> {
    const todos = getState().todos.filter(_todo => _todo.id !== todo.id); 
    await setItem('TODOS', todos);
    dispatch({ type: 'SET_TODOS', todos});

  }
};

export { fetchTodos, createTodo, deleteTodo, updateTodo };
