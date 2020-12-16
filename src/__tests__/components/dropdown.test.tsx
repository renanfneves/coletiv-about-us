import React from 'react';
import { shallow } from 'enzyme';
import { Dropdown } from '../../components';

test('It renders the dropdown component', () => {
  const component = shallow(<Dropdown label="test" onClick={jest.fn()} />);
  expect(component).toMatchSnapshot();
});