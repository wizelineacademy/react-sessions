import React from 'react';
import {
  Route,
  Redirect,
  Link,
  NavLink,
  Switch,
  withRouter,
} from 'react-router-dom';

// find example in https://reacttraining.com/react-router/web/example/auth-workflow

const Public = () => <h3>Public</h3>;
const Protected = () => <h3>PROTECTED</h3>;
const Authentication = () => (
    <div>
      <AuthButton />
      <ul>
        <li>
          <Link to="/Authentication/public">Public Page</Link>
        </li>
        <li>
          <Link to="/Authentication/protected">Protected Page</Link>
        </li>
      </ul>
      <Route path="/Authentication/public" component={Public} />
      <Route path="/Authentication/login" component={Login} />
      <PrivateRoute path="/Authentication/protected" component={Protected} />
    </div>
);

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/Authentication"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/Authentication/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);


class Login extends React.Component {
  state = {
    redirectToReferrer: false
  };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/Authentication" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}

export default Authentication;
