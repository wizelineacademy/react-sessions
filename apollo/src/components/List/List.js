import React, { Component } from "react";
import { Query } from "react-apollo";
import Pokemon from "../Pokemon";
import { POKEMONS_QUERY } from "./List.query";
import { Container } from "./List.styled";

//<Container>
//{data.pokemons.map(pokemon => {

//return (
//<Pokemon
//onSelect={onSelect}
//key={pokemon.id}
//id={pokemon.id}
//name={pokemon.name}
//image={pokemon.image}
//number={pokemon.id}
///>
//);
//})}
//</Container>

class PokemonList extends Component {
  render() {
    const { onSelect } = this.props;
    return <div> Pokemon List </div>;
  }
}

export default PokemonList;
