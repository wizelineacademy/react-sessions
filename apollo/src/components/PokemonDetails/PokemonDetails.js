import React, { Component } from "react";
import { Query } from "react-apollo";
import { POKEMON_QUERY } from "./PokemonDetails.query";
import {
  Name,
  Card,
  Image,
  DetailsList,
  DetailItem
} from "./PokemonDetails.styled";

class PokemonDetails extends Component {
  render() {
    const { id } = this.props;

    return (
      <Query query={POKEMON_QUERY} variables={{ id }}>
        {({ loading, error, data }) => {
          if (loading) {
            return <div> Loading </div>;
          }

          const {
            image,
            name,
            number,
            classification,
            fleeRate,
            maxCP
          } = data.pokemon;

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
        }}
      </Query>
    );
  }
}

export default PokemonDetails;
