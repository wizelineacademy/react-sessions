import React, { Component } from "react";
import { DataTileStyled } from '../container/App.styled';

class TileErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch() {  
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1 style={{color: 'white', backgroundColor: 'red'}}>sos ...</h1>;
    }
    return this.props.children;
  }
}

export { TileErrorBoundary };
