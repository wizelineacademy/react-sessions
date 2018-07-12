import gql from "graphql-tag";

export const POKEMON_QUERY = gql`
  query($id: ID!) {
    pokemon(id: $id) {
      id
      name
      image
    }
  }
`;
