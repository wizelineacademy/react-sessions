import React from "react";
import { Overlay, Container } from "./Modal.styled";
import PokemonDetails from "../PokemonDetails";

const Modal = props => {
  const { open, onCloseModal, selectedPokemon } = props;

  if (!open) {
    return null;
  }

  return (
    <Container>
      <PokemonDetails id={selectedPokemon} />
      <Overlay onClick={onCloseModal} />
    </Container>
  );
};

export default Modal;
