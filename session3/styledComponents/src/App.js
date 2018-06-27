import React, { Component } from 'react'
import { NavMenu, NavLink, Border, StyledLink } from './style'

const getLinks = () => [
  { label: 'Home', url: '/' },
  { label: 'Woof!', url: '/dog' },
  { label: 'Hello!', url: '/hello' }
]

const AppNavLink = ({url, label, selected}) => (
  <NavLink className='link' >
      <StyledLink to={url} selected={selected}>{label}</StyledLink>
      <Border />
  </NavLink>
);

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
    return this.state.links.map(({url, label}) => {
      const isSelected = this.state.selected === url;
      return <AppNavLink url={url} label={label} selected={isSelected} key={url}></AppNavLink>
    });
  }

  render () {
    return (
      <NavMenu>
        {this.renderLinks()}
      </NavMenu>
    )
  }
}

export default App
