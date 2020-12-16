import React from 'react';
import { shallow } from 'enzyme';
import { Article } from '../../components';

test('It renders the article component', () => {
  const component = shallow(
    <Article
      image="Test Img"
      alt="Test Alt"
      subject="Test Subject"
      subTitle="Test Subject" 
    />
  );

  expect(component).toMatchSnapshot();
});