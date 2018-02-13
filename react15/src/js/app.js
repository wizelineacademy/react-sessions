import React from 'react';
import ReactDOM from 'react-dom';

const mountNode = document.getElementById('main-app');

const Heading = () => (
  <h1>React 16 series - session 1</h1>
);

ReactDOM.render(<Heading />, mountNode);
