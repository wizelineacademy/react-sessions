import React from 'react';
import Container from '../presentational/Container';
import styled from 'styled-components';
import { createPortal } from 'react-dom';

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
  z-index: 999;

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

const MaskStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  opacity: 0.8;
`;

const MagicPortal = ({ children }) => {
  const nodeToAppend = document.getElementsByTagName('body')[0];

  return createPortal(children, nodeToAppend);
}

const Modal = () => (
  <MagicPortal>
    <ModalStyled>
      <h4>
        Portal Example
      </h4>
      <p>
        I want to show you a very importan info here:
      </p>
    </ModalStyled>
    <MaskStyled />
  </MagicPortal>
);

const PortalExample = () => (
  <Container title="Portals">
    <EvilDiv>
      <Modal />
    </EvilDiv>
  </Container>
);

export default PortalExample;
