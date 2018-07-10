import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import NavbarList from './components/NavbarList';
import { Nav } from './App.style';

injectGlobal`
ul {
  0% { 
   width:0;
 }
 100% { 
   width:calc(100% - 23px);
 }
}
`;

const getLinks = () => [
  { label: 'Home', url: '/' },
  { label: 'Woof!', url: '/dog' },
  { label: 'Hello!', url: '/hello' },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '/',
      links: [],
    };
    this.renderLinks = this.renderLinks.bind(this);
  }

  componentDidMount() {
    this.setState({
      links: getLinks(),
    });
  }

  renderLinks() {
    return this.state.links.map(link => <NavbarList link={link} />);
  }

  render() {
    return <Nav>{this.renderLinks()}</Nav>;
  }
}

export default App;
