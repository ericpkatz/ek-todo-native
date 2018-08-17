import reducer from './todos.reducer';
describe('todos (reducer)', ()=> {
  test('initial state', ()=> {
    expect(reducer(undefined, {})).toEqual([]);
  })
  test('set todos', ()=> {
    const todos = ['TODO1', 'TODO2'];
    const action = {
      type: 'SET_TODOS',
      todos
    };
    expect(reducer(undefined, action)).toEqual(todos);
  });
});
