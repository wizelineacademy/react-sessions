import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

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
      <li className='link' key={url}>
        <Link to={url}>{label}</Link>
        <span className='border' />
      </li>
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
