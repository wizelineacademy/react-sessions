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
//<Card>
//<Image src={image} />
//<Name>{name}</Name>
//<DetailsList>
//<DetailItem> Number: {number} </DetailItem>
//<DetailItem> Classification: {classification} </DetailItem>
//<DetailItem> Flee Rate: {fleeRate} </DetailItem>
//<DetailItem> Max CP: {maxCP} </DetailItem>
//</DetailsList>
//</Card>

class PokemonDetails extends Component {
  render() {
    const { id } = this.props;

    return <div> Pokemon Details</div>;
  }
}

export default PokemonDetails;
