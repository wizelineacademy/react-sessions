import React, { Component } from "react";
import { DataTileStyled } from '../container/App.styled';

class TileErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasErrors: false,
      info: '',
    };
  }

  // Use the new life cycle method here

  render() {
    const { children } = this.props;
    const { hasErrors } = this.state;

    if (hasErrors) {
      return <DataTileStyled error></DataTileStyled>
    }

    return children;
  }
}

export { TileErrorBoundary };
