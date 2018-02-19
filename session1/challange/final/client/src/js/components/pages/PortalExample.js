import React, { Component } from 'react';
import Container from '../presentational/Container';
import styled from 'styled-components';
import { createPortal } from 'react-dom';
import { EvilDiv, ModalStyled, ButtonStyled } from './PortalExample.styled';

const MagicPortal = ({ children }) => {
  const nodeToAppend = document.getElementsByTagName('body')[0];

  return createPortal(children, nodeToAppend);
}

const Modal = ({ open, onClick }) => (
  <MagicPortal>
    <ModalStyled open={open}>
      <h4 onClick={onClick} >
        Click me to close
      </h4>
      <p>
        I want to show you a very importan info here:
      </p>
    </ModalStyled>
  </MagicPortal>
);

class PortalExample extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false }
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    const { open } = this.state;

    this.setState({ open: !open });
  }

  render() {
    return (
      <Container title="Portals">
        <EvilDiv>
          <ButtonStyled onClick={this.toggleModal}>Click me</ButtonStyled>
          <Modal open={this.state.open} onClick={this.toggleModal} />
        </EvilDiv>
      </Container>
    );
  }
}

export default PortalExample;
