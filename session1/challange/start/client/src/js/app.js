import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/container/App';
import reset from '../reset.css';
import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    font-family: 'Roboto Slab', serif;
    background-color: #282E53;
    color: #EFEFF2;
  }
`;

const mountNode = document.getElementById('main-app');

ReactDOM.render(<App />, mountNode);
