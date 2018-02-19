import React from 'react';
import {
  Route,
  Redirect,
  Link,
  NavLink,
  Switch,
  withRouter,
} from 'react-router-dom';

const Authentication = () => (
  <div className="slide-container">
    <h1>Authentication (#step6-authentication)</h1>
    <p>
      It's very common in applications to restrict the user's ability to visit certain routes depending on their login status
    </p>
  </div>
);

export default Authentication;
