import React from 'react';
import { linkComponentToObject } from '../images';

const LinkComponent = () => (
  <div className="slide-container">
    <h1>Link component (#step5-link-component)</h1>
    <h3>- Link component props</h3>
    <p>to as string: A string representation of the location to link to, created by concatenating the location’s pathname, search, and hash properties.</p>
    <p>to as object: An object that can have any of the following properties: pathname, search, hash, state</p>
    <p>You can also pass props you’d like to be on the anchor such as a title, id, className, etc.</p>
    <img src={linkComponentToObject} />
  </div>
);

export default LinkComponent;
