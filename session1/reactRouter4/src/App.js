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
              <Route path="/Introduction" children={({ match }) => {
                const active = match ? 'active' : '';
                return `Introduction ${active.toUpperCase()}`;
              }} />
            </li>
            <li>
              <Route path="/MentalModel" children={({ match }) => {
                const active = match ? 'active' : '';
                return `Mental model change ${active.toUpperCase()}`;
              }} />
            </li>
            <li>
              <Route path="/InitConfiguration" children={({ match }) => {
                const active = match ? 'active' : '';
                return `Init configuration (#step1-init-config) ${active.toUpperCase()}`;
              }} />
            </li>
            <li>
              <Route path="/RouteComponent" children={({ match }) => {
                const active = match ? 'active' : '';
                return `Route component (#step2-route-component) ${active.toUpperCase()}`;
              }} />
            </li>
            <li>
              <Route path="/LinkComponent" children={({ match }) => {
                const active = match ? 'active' : '';
                return `Link component (#step3-link-component) ${active.toUpperCase()}`;
              }} />
            </li>
            <li>
              <Route path="/DecentralizedPattern" children={({ match }) => {
                const active = match ? 'active' : '';
                return `Decentralized pattern (#step4-decentralized-pattern) ${active.toUpperCase()}`;
              }} />
            </li>
            <li>
              <Route path="/RedirectComponent" children={({ match }) => {
                const active = match ? 'active' : '';
                return `Redirect component (#step5-redirect-component) ${active.toUpperCase()}`;
              }} />
            </li>
            <li>
              <Route path="/Authentication" children={({ match }) => {
                const active = match ? 'active' : '';
                return `Authentication (#step6-authentication) ${active.toUpperCase()}`;
              }} />
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
