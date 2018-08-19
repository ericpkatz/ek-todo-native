import { _Tasks as Tasks } from './Tasks';
import { shallow } from 'enzyme';
import React from 'react';
import { Text } from 'react-native';

describe('Tasks', ()=> {
  test('render', ()=> {
    const tasks = [{
      id: 1,
      title: 'Learn Jest'
    }];
    const container = shallow(<Tasks tasks={ tasks }/>);
    expect(container.find(Text).length).toEqual(1);
  });
});


