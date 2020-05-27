import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div id="main-container">
        <h1>Hello I'm a Website!</h1>
        <h2>I'm still a website!</h2>
      </div>
    );
  }
}

export default App;
