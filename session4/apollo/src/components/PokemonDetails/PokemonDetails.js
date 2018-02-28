import React, { Component } from "react";
import {
  ExpandButton,
  Name,
  Card,
  Image,
  DetailsList,
  DetailItem
} from "./PokemonDetails.styled";

class PokemonDetails extends Component {
  state = {
    expanded: false
  };

  onClick = () => {
    this.setState({ expanded: true });
  };

  render() {

    return (
      <Card>
      </Card>
    );
  }
}

export default PokemonDetails;
