import React, { Component } from "react";
import { createPortal } from 'react-dom';
import { ModalStyled } from './ModalPortal.styled.js';

const Modal = ({ open, onClick, children }) => {
  return (
    <ModalStyled open={open} >
      <div onClick={onClick}>
        Click to close
      </div>
      {children}
    </ModalStyled>
  );
}

const Portal = ({ open, onClick, children }) => {
  return (
    createPortal(
      <Modal open={open} onClick={onClick}>
        {children}
      </Modal>,
      document.body
    )
  );
}

export default Portal;
export { Modal };
