import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavStyled, BorderStyled, LinkStyled } from "./App.styled";
// import "./App.css";

const getLinks = () => [
  { label: "Home", url: "/" },
  { label: "Woof!", url: "/dog" },
  { label: "Hello!", url: "/hello" }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "/",
      links: []
    };
    this.renderLinks = this.renderLinks.bind(this);
  }

  componentDidMount() {
    this.setState({
      links: getLinks()
    });
  }

  renderLinks() {
    return this.state.links.map(({ url, label }) => (
      <LinkStyled selected={this.state.selected === url} key={url}>
        <Link to={url}>{label}</Link>
        <BorderStyled />
      </LinkStyled>
    ));
  }

  render() {
    return <NavStyled>{this.renderLinks()}</NavStyled>;
  }
}

export default App;
