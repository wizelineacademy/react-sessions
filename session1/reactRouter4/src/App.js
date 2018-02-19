import React, { Component } from 'react';
import {
  Route,
  Redirect,
  Link,
  NavLink,
  Switch,
  withRouter,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import ComponentsHome from './components/ComponentsHome';
import ComponentsNav from './components/ComponentsNav';
import NotFound from './components/NotFound';
import Introduction from './slides/Introduction';
import MentalModel from './slides/MentalModel';
import InitConfiguration from './slides/InitConfiguration';
import RouteComponent from './slides/RouteComponent';
import LinkComponent from './slides/LinkComponent';
import RedirectComponent from './slides/RedirectComponent';
import DecentralizedPattern from './slides/DecentralizedPattern';
import Authentication from './slides/Authentication';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <ul>
            <li>Introduction (#step1-introduction)</li>
            <li>Mental model change (#step2-mental-model)</li>
            <li>Init configuration (#step3-init-config)</li>
            <li>Route component (#step4-route-component)</li>
            <li>Link component (#step5-link-component)</li>
            <li>Decentralized pattern (#step6-decentralized-pattern)</li>
            <li>Redirect component (#step5-redirect-component)</li>
            <li>Authentication (#step6-authentication)</li>
          </ul>
          <hr />
        </header>
        <p className="App-intro">
          <Introduction  />
          <MentalModel  />
          <InitConfiguration  />
          <RouteComponent  />
          <LinkComponent  />
          <DecentralizedPattern  />
          <RedirectComponent  />
          <Authentication  />
        </p>
      </div>
    );
  }
}

export default App;
