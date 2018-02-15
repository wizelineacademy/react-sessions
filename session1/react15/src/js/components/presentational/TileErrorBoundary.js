import React, { Component } from 'react';
import { ErrorTileStyled } from './Tile.styled';

class TileErrorBoundary extends Component {

  constructor(props) {
    super(props)
    this.state = { hasErrors: false, info: '' };
  }

  componentDidCatch(error, info) {
    console.log('error', error, info);
    this.setState({ hasErrors: true });
  }

  render() {
    const { children } = this.props;
    const { hasErrors } = this.state;

    if (hasErrors) {
      return <ErrorTileStyled />
    }

    return children;
  }
}

export default TileErrorBoundary;
