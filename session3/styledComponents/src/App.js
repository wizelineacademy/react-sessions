import React, { Component } from 'react'
import Zelda from './Zelda'
import Nav from './Nav'

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
      <Zelda key={url} url={url} label={label} />
    ))
  }

  render () {
    return (
      <Nav>
        {this.renderLinks()}
      </Nav>
    )
  }
}

export default App
