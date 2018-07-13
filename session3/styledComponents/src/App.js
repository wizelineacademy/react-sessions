import React, { Component } from "react";
import CustomNav from "./components/CustomNav";
import { injectGlobal } from "styled-components";

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

//import "./App.css";

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
  }

  componentDidMount() {
    this.setState({
      links: getLinks()
    });
  }

  render() {
    return <CustomNav links={this.state.links} />;
  }
}

export default App;
