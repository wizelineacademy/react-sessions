import React, { Component } from "react";
import List from "../List";
import Modal from "../Modal";
import "./App.css";

class App extends Component {
  state = {
    open: false,
    selectedPokemon: null
  };

  selectPokemon = number => {
    this.setState({ selectedPokemon: number, open: true });
  };

  closeModal = () => {
    this.setState({ selectedPokemon: null, open: false });
  };

  render() {
    const { open, selectedPokemon } = this.state;

    return (
      <div>
        <List onSelect={this.selectPokemon} />
        <Modal
          open={open}
          selectedPokemon={selectedPokemon}
          onCloseModal={this.closeModal}
        />
      </div>
    );
  }
}

export default App;
