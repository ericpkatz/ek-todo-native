import React from 'react';
import App from './App';
import { Text } from 'react-native';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const app = shallow(<App />);
  expect(app.find(Text).length).toEqual(3);
  /*
  const rendered = renderer.create(<App />).toJSON();
  console.log(rendered);
  expect(rendered).toBeTruthy();
  */
});
