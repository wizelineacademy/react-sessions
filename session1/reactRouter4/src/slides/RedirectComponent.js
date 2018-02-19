import React from 'react';
import {
  redirectComponentObject,
} from '../images';

const RedirectComponent = () => (
  <div className="slide-container">
    <h1>Redirect component (#step5-redirect-component)</h1>
    <p>
      Rendering a <strong>Redirect</strong> will navigate to a new location. 
    </p>
    <p>
      Will redirect inside a switch if no matching before its position
    </p>
    <img src={redirectComponentObject} />
  </div>
);

export default RedirectComponent;
