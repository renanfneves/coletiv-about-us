import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components';

test('It renders the header component', () => {
  const component = shallow(<Header />);
  expect(component).toMatchSnapshot();
});