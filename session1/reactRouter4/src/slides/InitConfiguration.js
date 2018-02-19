import React from 'react';
import { initConfigRouter } from '../images';

const MainComponents = () => (
  <div className="slide-container">
    <h1>Init configuration (#step1-init-config)</h1>
    <h3>- Client config</h3>
    <p className="comment">
      // install `npm install react-router-dom`
    </p>
    <p className="comment">
      // import BrowserRouter as Router
    </p>
    <p className="comment">
      // Router components only expect to receive a single child element
    </p>
    <img src={initConfigRouter} />
  </div>
);

export default MainComponents;
