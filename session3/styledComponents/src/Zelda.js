import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { StyledZelda } from './Zelda.style.js'

class Zelda extends Component {
  render () {
    return (
      <StyledZelda className='link' key={this.props.url}>
        <Link to={this.props.url}>{this.props.label}</Link>
        <span className='border' />
      </StyledZelda>
    )
  }
}

export default Zelda
