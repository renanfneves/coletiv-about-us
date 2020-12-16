import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from '../../components';

test('It renders the footer component', () => {
  const component = shallow(<Footer />);
  expect(component).toMatchSnapshot();
});