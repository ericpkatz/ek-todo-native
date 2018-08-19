import { _Todos as Todos } from './Todos';
import { shallow } from 'enzyme';
import React from 'react';
import TodoItem from './TodoItem';

describe('Todos', ()=> {
  test('render', ()=> {
    const todos = [{
      id: 1,
      title: 'Learn Jest'
    }];
    const container = shallow(<Todos todos={ todos }/>);
    expect(container.find(TodoItem).length).toEqual(1);
  });
});


