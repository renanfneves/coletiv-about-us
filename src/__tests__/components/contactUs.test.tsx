import React from 'react';
import { shallow } from 'enzyme';
import { ContactUs } from '../../components';

test('It renders the contactUs component', () => {
  const component = shallow(<ContactUs />);
  expect(component).toMatchSnapshot();
});