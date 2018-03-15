import React from 'react';
import { string } from 'prop-types';

const Image = ({ src, alt }) => <img src={{src}} alt={{alt}}></img>;


Image.propTypes = {
  src: string.isRequired,
  alt: string.isRequired
};

export default Image;