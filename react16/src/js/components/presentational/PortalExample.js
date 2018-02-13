import React from 'react';
import Container from './Container';
import styled from 'styled-components';

const EvilDiv = styled.div`
  overflow: hidden;
  width: 100%;
  height: 80px;
  background-color: pink;
  border: 1px dotted lightgrey;
`;

const ModalStyled = styled.div`
  height: 550px;
  width: 250px;
  margin: 0 auto;
  border: 5px solid black;
  background: white;

  h4 {
    color: white;
    font-size: 30px;
    text-align: center;
    background: black;
    padding: 15px 0;
  }

  p {
    padding: 5px;
  }
`;

const Modal = () => (
  <ModalStyled>
    <h4>
      Portal Example
    </h4>
    <p>
      I want to show you a very importan info here:
    </p>
  </ModalStyled>
);

const PortalExample = () => (
  <Container title="Portals">
    <EvilDiv>
      <Modal />
    </EvilDiv>
  </Container>
);

export default PortalExample;
