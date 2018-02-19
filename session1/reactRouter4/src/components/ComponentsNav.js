import React, { Component } from 'react';
import {
  Route,
  Redirect,
  Link,
  NavLink,
  Switch,
} from 'react-router-dom';

class ComponentsNav extends Component {
  componentDidMount() {
    console.log('HELLO this is nav')
  }

  componentWillUnmount() {
    console.log('BYE BYE')
  }

  render() {
    return (
      <ul>
        <li><NavLink activeClass="active" to="/components/RouteComponent">Route component</NavLink></li>
        <li><NavLink activeClass="active" to="/components/LinkComponent">Link component</NavLink></li>
        <li><NavLink activeClass="active" to="/components/SwitchComponent">Switch component</NavLink></li>
        <li><NavLink activeClass="active" to="/components/RedirectComponent">Redirect component</NavLink></li> 
      </ul>
    );
  }
};

export default ComponentsNav;
