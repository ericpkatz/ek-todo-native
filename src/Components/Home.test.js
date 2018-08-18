import React from 'react';
import {_Home as Home }  from './Home';
import { Text } from 'react-native';
import { shallow } from 'enzyme';

describe('Home', ()=> {
  test('renders', ()=> {
    const home = shallow(<Home />);
    expect(home.find(Text).length).toEqual(1);
  });
});
