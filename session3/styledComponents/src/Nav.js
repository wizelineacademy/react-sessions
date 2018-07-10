import React, { Component } from 'react'
import { StyledNav } from './Nav.style.js'

class Nav extends Component {
  render () {
    return (
      <StyledNav>
        {this.props.children}
      </StyledNav>
    )
  }
}

export default Nav
