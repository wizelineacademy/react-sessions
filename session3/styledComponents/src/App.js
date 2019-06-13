import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import './App.css'
import './global';
import { StyledLink, StyledNav, StyledList, StyleBorder } from "./App.style";
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
    return this.state.links.map(({url, label}) => (
      <StyledList key={url}>
        <StyledLink to={url} selected={this.state.selected === url}>{label}</StyledLink>
        <StyleBorder className='border' />
      </StyledList>
    ))
  }

  render () {
    return (
      <StyledNav>
        {this.renderLinks()}
      </StyledNav>
    )
  }
}

export default App
