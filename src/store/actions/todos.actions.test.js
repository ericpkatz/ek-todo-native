describe('todos (actions)', ()=> {
  describe('fetchTasks', ()=> {
    test('success', ()=> {
      const store = {
        getActions: ()=> {
          return [{
            type: 'SET_TASKS',
            tasks: ['TODO1', 'TODO2']
          }]
        }
      };
      const [ setTodos ] = store.getActions();
      expect(setTodos).toEqual({
        type: 'SET_TASKS',
        tasks: ['TODO1', 'TODO2']
      });
    });
    test('failure', ()=> {
    });
  });
});
