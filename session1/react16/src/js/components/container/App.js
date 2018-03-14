import React, { Component } from 'react';
import Menu from '../presentational/Menu';
import Container from '../presentational/Container';
import Header from '../presentational/Header';
import styled from 'styled-components';
import {
  FragmentsExample,
  CustomAttributesExample,
  PortalExample,
  ErrorBoundariesExample,
  AnimationExample,
} from '../pages';

import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';

const contentMap = {
  'animation': AnimationExample,
  'fragments': FragmentsExample,
  'custom attributes': CustomAttributesExample,
  'portals': PortalExample,
  'error boundaries': ErrorBoundariesExample
};

const sections = Object.keys(contentMap);


const Wrapper = styled.div`
  display: flex;
`;

class App extends Component {
  constructor(props) {
    super(props);
  }

  renderRoutes () {
    return Object.entries(contentMap).map(([routeName, component]) => {
      routeName = routeName.replace(/ /g, '_');
      return <Route key={routeName}  path={`/${routeName}`} component={component} />
    })
  }

  render() {
    const active = this.props.location.pathname.replace(/\//g, '').replace(/_/g, ' ');
    return (
      <div>
        <Header />
        <Wrapper>
          <div>
            <Menu items={sections} active={active} />
          </div>
          <Switch>
            {this.renderRoutes()}
          </Switch>
        </Wrapper>
      </div>
    );
  }
}

export default withRouter((props) => <App location={props.location} />);
