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
            <li>
              <Link to="/Introduction">
                Introduction
              </Link>
            </li>
            <li>
              <Link to="/MentalModel">
                Mental model change
              </Link>
            </li>
            <li>
              <Link to="/InitConfiguration">
                Init configuration (#step1-init-config)
              </Link>
            </li>
            <li>
              <Link to="/RouteComponent">
                Route component (#step2-route-component)
              </Link>
            </li>
            <li>
              <Link to="/LinkComponent">
                Link component (#step3-link-component)
              </Link>
            </li>
            <li>
              <Link to="/DecentralizedPattern">
                Decentralized pattern (#step4-decentralized-pattern)
              </Link>
            </li>
            <li>
              <Link to="/RedirectComponent">
                Redirect component (#step5-redirect-component)
              </Link>
            </li>
            <li>
              <Link to="/Authentication">
                Authentication (#step6-authentication)
              </Link>
            </li>
          </ul>
          <hr />
        </header>
        <p className="App-intro">
          <Route path="/Introduction" component={Introduction}  />
          <Route path="/MentalModel" component={MentalModel}  />
          <Route path="/InitConfiguration" component={InitConfiguration}  />
          <Route path="/RouteComponent" component={RouteComponent}  />
          <Route path="/LinkComponent" component={LinkComponent}  />
          <Route path="/DecentralizedPattern" component={DecentralizedPattern}  />
          <Route path="/RedirectComponent" component={RedirectComponent}  />
          <Route path="/Authentication" component={Authentication}  />
        </p>
      </div>
    );
  }
}

export default App;
