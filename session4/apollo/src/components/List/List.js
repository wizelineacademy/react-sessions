import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Pokemon from "../Pokemon";
import { Container } from "./List.styled";

class PokemonList extends Component {
  render() {
    const { pokemonQuery, onSelect } = this.props;

    if (!pokemonQuery) {
      return null;
    }

    if (pokemonQuery.loading) {
      return <div>Loading...</div>;
    }

    if (pokemonQuery.error) {
      return <div>Error</div>;
    }

    const { pokemons } = pokemonQuery;

    return (
      <Container>
        {pokemons.map(pokemon => (
          <Pokemon
            onSelect={onSelect}
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
            number={pokemon.number}
          />
        ))}
      </Container>
    );
  }
}

const POKEMONS_QUERY = gql`
  query GetPokemon {
    pokemons(first: 151) {
      id
      number
      name
      image
    }
  }
`;

// using the graphql container to “wrap” the PokemonList component with the POKEMONS_QUERY.
// Note that you’re also passing an options object to the function call
// where you specify the name to be feedQuery.
// This is the name of the prop that Apollo injects into the PokemonList component.
// If you didn’t specify it here, the injected prop would be called data by default.
export default graphql(POKEMONS_QUERY, { name: "pokemonQuery" })(PokemonList);
