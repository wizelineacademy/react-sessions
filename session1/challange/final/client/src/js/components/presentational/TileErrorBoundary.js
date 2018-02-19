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

  componentDidCatch(erro, info) {
    this.setState(() => ({
      hasErrors: true,
      info,
    }));
    console.warn('Error:', info);
  }

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
