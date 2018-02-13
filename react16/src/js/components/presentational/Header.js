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
  }
`;

const Header = () => (
  <HeaderStyled>
    <h1>
      React 16 - Session 1
    </h1>
  </HeaderStyled>
);

export default Header;
