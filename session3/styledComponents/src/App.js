import React, { Component } from 'react';
import './App.css';
import ListComponent from './components/ListComponent';
import { injectGlobal } from 'styled-components';

injectGlobal`
  @keyframes ul {
    0% { 
      width:0;
    }
    100% { 
      width:calc(100% - 23px);
    }
  }
`;



const getLinks = () => [ { label: 'Home', url: '/' }, { label: 'Woof!', url: '/dog' }, { label: 'Hello!', url: '/hello' } ]

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: '/',
      links: []
    }
    this.renderLinks = this.renderLinks.bind(this)
  }

  componentDidMount () {
    this.setState({
      links: getLinks()
    })
  }

  renderLinks () {
    return this.state.links.map((link) => (
      <ListComponent link={link} />
    ))
  }

  render () {
    return (
      <ul className='nav'>
        {this.renderLinks()}
      </ul>
    )
  }
}

export default App
