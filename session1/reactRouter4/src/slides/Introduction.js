import React from 'react';
import {
  appCentralizedRoutes,
  serviceCentralizedRoutes,
} from '../images';

const Introduction = ({ location={} }) => (
  <div>
    {
      location.state
        && location.state.from
        && `REDIRECTED FROM: ${location.state.from}`
    }
    <div className="slide-container">
      <h1>Introduction</h1>
      <h3>- Real life example</h3>
      <p className="comment">
        // Real application's main routes configuration
      </p>
      <img src={appCentralizedRoutes} />
      <p className="comment">
        // Service's routes configuration
      </p>
      <img src={serviceCentralizedRoutes} />
      <h3>- Sepparated code</h3>
      <h3>- Dynamic routing</h3>
    </div>
  </div>
);

export default Introduction;
