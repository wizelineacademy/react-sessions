import React from 'react';
import {
  exampleCentralizedRoutes,
  exampleDynamicRoutes,
} from '../images';

const MentalModel = () => (
  <div className="slide-container">
    <h1>Mental model change</h1>
    <h3>- Relationship with the layout</h3>
    <h3>- Changes</h3>
    <img src={exampleCentralizedRoutes} />
    <p className="comment">
      // - The first thing we throw into the DOM is our application itself.
    </p>
    <p className="comment">
      // - We don't use the .children to nest components anymore
    </p>
    <p className="comment">
      // - v3 routing rules were "exclusive" which meant that only one route would win
    </p>
    <p className="comment">
      // - V4 routes are "inclusive" by default
    </p>
    <img src={exampleDynamicRoutes} />
  </div>
);

export default MentalModel;
