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

const Portal = null;

export default Portal;
export { Modal };
