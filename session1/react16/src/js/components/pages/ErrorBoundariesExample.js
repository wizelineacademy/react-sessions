import React, { Component } from 'react';
import Container from '../presentational/Container';
import styled from 'styled-components';

const ENDPOINT = 'https://randomuser.me/api/';
const NUSERS = 8;

const ChatWrapperStyled = styled.div`
  position: fixed;
  bottom: 50px;
  right: 50px;
  display: flex;
  background: #2C315E;
  width: 360px;
  height: 500px;
  overflow: hidden;
  color: white;
  border-radius: 10px 5% / 20px 30px 116px;
`;

const UsersSectionStyled = styled.div`
  display: inline-block;
  width: 70px;
  padding-left: 10px;
`;

const MessageSectionStyled = styled.div`
  display: inline-block;
  margin: 20px;
  background: white;
  flex-grow: 1;
  border-radius: 5px;
`;

const ImageStyled = styled.img`
  border-radius: 50px;
  border: 11px solid black;
`;

class UserErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = { hasErrors: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasErrors: true });
    console.log('INFO', info);
  }

  render() {
    const { children } = this.props;
    const { hasErrors } = this.state;

    if (hasErrors) {
      return (
        <UsersSectionStyled>
          N/A
        </UsersSectionStyled>
      );
    }

    return children;
  }
}

const UsersSection = ({ users }) => {
  if (users.length >= 8) {
    throw new Error('React16 session 1 - ERROR');
  }

  return users.map((user) => (
    <ImageStyled src={user.picture.thumbnail} />
  ));
}

class ChatSimulator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    }
  }

  componentDidMount() {
    fetch(`${ENDPOINT}/?results=${NUSERS}`, { method: 'GET'})
      .then((response) => response.json())
      .then(({ results }) => {
        this.setState({ users: results});
      });
  }

  render() {
    return (
      <ChatWrapperStyled>
        <UserErrorBoundary>
          <UsersSectionStyled>
            <UsersSection users={this.state.users} />
          </UsersSectionStyled>
        </UserErrorBoundary>
        <MessageSectionStyled />
      </ChatWrapperStyled>
    );
  }
}

const ErrorBoundariesExample = () => (
  <Container title="Error boundaries">
    <ChatSimulator />
  </Container>
);

export default ErrorBoundariesExample;
