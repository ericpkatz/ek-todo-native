import React from 'react';
import { App } from './App';
import { Text } from 'react-native';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const app = shallow(<App />);
  expect(app.find(Text).length).toEqual(3);
});
