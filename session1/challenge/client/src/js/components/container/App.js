import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import {
  AppStyled,
  DataContainerStyled,
  DataTileStyled,
  MainDataStyled,
} from './App.styled';
import { TileErrorBoundary, Modal, Portal } from '../presentational';
import { FAKE_DATA, ENDPOINT } from './constants';

const transformKey = (text) => text.replace(/([a-z](?=[A-Z]))/g, '$1 ');

const DataTile = ({ name, value, loading, active, onClick }) => {
  if (value < 1) {
    throw new Error('Zero is not allowed');
  }
  return (
    <DataTileStyled
      loading={loading}
      active={active}
      onClick={() => !loading && onClick(name)}
    >
      <h3>{loading ? '' : transformKey(name)}</h3>
      <span>{value}</span>
    </DataTileStyled>
  );
};

const DataList = ({ data, loading, onClick, principal}) => {
  const items = loading ? FAKE_DATA : data;

  return Object.keys(items).map((key, index) => (
    <TileErrorBoundary key={index}>
      <DataTile
        value={items[key]}
        name={key}
        onClick={onClick}
        loading={loading}
        active={key === principal}/>
    </TileErrorBoundary>
  ));
}

const InformationModal = ({ open, onClick, children }) => {
  // TODO: Create a Portal component and wrap a modal
  // Create the portal on the ../presentational/ModalPortal.js file

  const modal = (
      <Modal open={open} onClick={onClick}>
        {children}
      </Modal>
  );

  return null;
}

class MainTile extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.showModal = this.showModal.bind(this);
  }

  showModal() {
    this.setState((prevState) => {
      return { open: !prevState.open };
    });
  }

  render() {
    const { data, isLoading, principal } = this.props;
    const { open } = this.state;
    let content;

    if (isLoading) {
      content = 'Loading...';
    } else {
      content = [
        <h2 key={1}>{transformKey(principal)}</h2>,
        <span key={2} onClick={this.showModal}>{data[principal]}</span>
      ];
    }

    return (
      <MainDataStyled>
        {content}
        <InformationModal open={open} onClick={this.showModal} >
          {content}
        </InformationModal>
      </MainDataStyled>
    );
  }
}

const Information = ({ data, principal, onClick }) => {
  const isLoading = !data;
  const mainContent = isLoading ? 'Loading...' : [, data[principal]];
  const content = (
    <DataList
      data={data}
      loading={isLoading}
      principal={principal}
      onClick={onClick} />
  );

  return (
    <DataContainerStyled>
      <MainTile principal={principal} data={data} isLoading={isLoading} />
      {content}
    </DataContainerStyled>
  );
};

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null,
      principal: 'temperature',
    };
    this.updatePrincipal = this.updatePrincipal.bind(this);
  }

  updatePrincipal(value) {
    this.setState((prevState) => {
      if (value === prevState.principal) {
        return null;
      }

      return { principal: value };
    });
  }

  componentDidMount() {
    const socket = socketIOClient(ENDPOINT);


    const updateTemperature = (prevState, data) => {
      const newState = prevState.temperature === data.temperature ? null : { data };
      return newState;
    }

    socket.on("FromAPI", (data) => {
       this.setState((prevState) => updateTemperature(prevState, data.data));
    });
  }

  render() {
    const { data, principal } = this.state;

    return (
      <AppStyled>
        <Information data={data} principal={principal} onClick={this.updatePrincipal} />
      </AppStyled>
    );
  }
}

export default App;
