import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { updateTodo, fetchTodos, createTodo, deleteTodo } from './todos.actions';
import * as localStore  from '../localStore';

const mockStore = configureMockStore([thunk]);
describe('todos (actions)', ()=> {
  afterEach(()=> jest.restoreAllMocks());

  describe('fetchTodos', ()=> {
    test('success', async()=> {
      const todos = [
        'TODO1',
        'TODO2'
      ];
      const mockGetItem = jest.spyOn(localStore, 'getItem').mockImplementation(()=> todos);
      const store = mockStore();
      await store.dispatch(fetchTodos());
      expect(mockGetItem).toHaveBeenCalledTimes(1);
      expect(mockGetItem.mock.calls[0]).toEqual(['TODOS', []]);

      const expectedAction = {
        type: 'SET_TODOS',
        todos
      };
      const [ action ] = store.getActions();
      expect(action).toEqual(expectedAction);
    });
    xtest('failure', ()=> {
    });
  });
  describe('createTodo', ()=> {
    test('success', async()=> {
      const todos = [
        'TODO1',
        'TODO2'
      ];
      const mockSetItem = jest.spyOn(localStore, 'setItem').mockImplementation(()=> {});
      const store = mockStore({ todos });
      await store.dispatch(createTodo('TODO3'));
      expect(mockSetItem).toHaveBeenCalledTimes(1);
      expect(mockSetItem.mock.calls[0]).toEqual(['TODOS', ['TODO1', 'TODO2', 'TODO3']]);

      const expectedAction = {
        type: 'SET_TODOS',
        todos: [...todos, 'TODO3']
      };
      const [ action ] = store.getActions();
      expect(action).toEqual(expectedAction);
    });
    xtest('failure', ()=> {
    });
  });
  describe('deleteTodo', ()=> {
    test('success', async()=> {
      const todos = [
        { id: 1, title: 'TODO1'},
        { id: 2, title: 'TODO2'},
      ];
      const mockSetItem = jest.spyOn(localStore, 'setItem').mockImplementation(()=> {});
      const store = mockStore({ todos });
      await store.dispatch(deleteTodo({ ...todos[1]}));
      expect(mockSetItem).toHaveBeenCalledTimes(1);
      expect(mockSetItem.mock.calls[0]).toEqual(['TODOS', [todos[0]]]);

      const expectedAction = {
        type: 'SET_TODOS',
        todos: [todos[0]]
      };
      const [ action ] = store.getActions();
      expect(action).toEqual(expectedAction);
    });
    xtest('failure', ()=> {
    });
  });
  describe('updateTodo', ()=> {
    test('success', async()=> {
      const todos = [
        { id: 1, title: 'TODO1'},
        { id: 2, title: 'TODO2'},
      ];
      const mockSetItem = jest.spyOn(localStore, 'setItem').mockImplementation(()=> {});
      const store = mockStore({ todos });
      const updated = {...todos[1], title: 'TODOO2'};
      await store.dispatch(updateTodo(updated));
      expect(mockSetItem).toHaveBeenCalledTimes(1);
      expect(mockSetItem.mock.calls[0]).toEqual(['TODOS', [todos[0], updated]]);

      const expectedAction = {
        type: 'SET_TODOS',
        todos: [todos[0], updated]
      };
      const [ action ] = store.getActions();
      expect(action).toEqual(expectedAction);
    });
    xtest('failure', ()=> {
    });
  });
});
