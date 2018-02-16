import React from 'react';
import styled from 'styled-components';

const HeaderStyled = styled.div`
  background-color: #20232a;
  h1 {
    color: #61dafb;
    font-size: 30px;
    text-align: center;
    padding: 30px;
  }

  span {
    font-size: 12px;
    color: white;
    position: fixed;
    top: 20px;
    right: 20px;
  }
`;

const Header = () => (
  <HeaderStyled>
    <h1>
      React 16 - Session 1
      <span>React version: {React.version}</span>
    </h1>
  </HeaderStyled>
);

export default Header;
