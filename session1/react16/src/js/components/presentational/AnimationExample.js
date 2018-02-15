import React, { Component } from 'react';
import { findDOMNode } from 'react-dom'
import Container from './Container';
import { TileStyled } from './Tile.styled';
import styled from 'styled-components';
import Tile from './Tile';

const ITEMS_COUNT = 20;

const initialState = {
  dimensions: { width: 0, height: 0},
};

const TileList = ({ limit, width, height }) => {
  const list = [];

  for (let index = 0; index < limit; index++) {
    list.push(<Tile index={index} width={width} height={height} />);
  }

  return list;
}

class AnimationExample extends Component {

  constructor(props) {
    super(props);

    this.state = initialState;
  }

  componentDidMount() {
    this.calculateDimensions();
  }

  calculateDimensions() {
    const containerNode = findDOMNode(this._container);
    const width = containerNode.offsetWidth / ITEMS_COUNT;
    const height = ((window.innerHeight - 350) / ITEMS_COUNT);
    const dimensions = { width, height };

    this.setState({ dimensions });
  }

  render() {
    const { dimensions } = this.state;

    return (
      <Container ref={(c) => this._container = c} title="Animation">
        <TileList limit={ITEMS_COUNT * ITEMS_COUNT} {...dimensions} />
      </Container>
    );
  }

}

export default AnimationExample;
