import React from "react";
import { Data, PokemonCard, Image } from "./Pokemon.styled";

const Pokemon = ({ number, name, image, onSelect, id }) => (
  <PokemonCard onClick={() => onSelect(id)}>
    <Image src={image} />
    <Data>
      <span>#{number}</span>
      <span>{name}</span>
    </Data>
  </PokemonCard>
);

export default Pokemon;
