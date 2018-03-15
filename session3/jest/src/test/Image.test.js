// Basic Snapshopt Testing
import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Image from '../components/Image';

// TODOs
// Fix the current test
// Test the prop alt

describe('Image', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Image title='mockTitle' url='mockUrl' />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('should render with src', () => {
    const output = shallow(
      <Image title='mockTitle' url='mockUrl' />
    );
    expect(output.prop('src')).toEqual('mockUrl');
  });
});