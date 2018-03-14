import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Image from '../components/Image';

describe('Image', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Image title="mockTitle" url="mockUrl" />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});