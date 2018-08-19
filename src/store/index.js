import { combineReducers, applyMiddleware, createStore } from 'redux';
import todosReducer from './reducers/todos.reducer';
import filterReducer from './reducers/filter.reducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;


