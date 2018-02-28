import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import {
  Name,
  Card,
  Image,
  DetailsList,
  DetailItem
} from "./PokemonDetails.styled";

class PokemonDetails extends Component {
  render() {
    const { pokemonQuery } = this.props;
    const { pokemon, loading } = pokemonQuery;

    if (loading) {
      return <div> Loading </div>;
    }

    const { image, name, number, classification, fleeRate, maxCP } = pokemon;

    return (
      <Card>
        <Image src={image} />
        <Name>{name}</Name>
        <DetailsList>
          <DetailItem> Number: {number} </DetailItem>
          <DetailItem> Classification: {classification} </DetailItem>
          <DetailItem> Flee Rate: {fleeRate} </DetailItem>
          <DetailItem> Max CP: {maxCP} </DetailItem>
        </DetailsList>
      </Card>
    );
  }
}

const POKEMON_QUERY = gql`
  query($id: String) {
    pokemon(id: $id) {
      name
      number
      classification
      id
      fleeRate
      maxCP
      image
    }
  }
`;

export default graphql(POKEMON_QUERY, {
  options: ownProps => {
    return {
      variables: {
        id: ownProps.id
      }
    };
  },
  name: "pokemonQuery"
})(PokemonDetails);
