import gql from "graphql-tag";

export const POKEMONS_QUERY = gql`
  query GetPokemon {
    pokemons {
      id
      name
      image
    }
  }
`;
