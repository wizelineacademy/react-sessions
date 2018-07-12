import React, { Component } from "react";
import { Query } from "react-apollo";
import Pokemon from "../Pokemon";
import { POKEMONS_QUERY } from "./List.query";
import { Container } from "./List.styled";

class PokemonList extends Component {
  render() {
    const { onSelect } = this.props;
    return (
      <Query query={POKEMONS_QUERY}>
        {({ loading, error, data }) => {
          if (error) {
            return <div>error</div>;
          }

          if (loading) {
            return <div> loading </div>;
          }

          return (
            <Container>
              {data.pokemons.map(pokemon => {

                return (
                  <Pokemon
                    onSelect={onSelect}
                    key={pokemon.id}
                    id={pokemon.id}
                    name={pokemon.name}
                    image={pokemon.image}
                    number={pokemon.id}
                  />
                );
              })}
            </Container>
          );
        }}
      </Query>
    );
  }
}

export default PokemonList;
