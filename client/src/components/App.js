import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import "../styles/App.css";
import NavBar from "./NavBar.js";
import Home from './Home.js';
import PhotoTour from './PhotoTour.js';
import Handbook from './Handbook.js';
import Resources from './Resources.js';
import Apply from './Apply.js';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div id="main-container">
        <NavBar />
        <Router>
          <Home path='/' />
          <PhotoTour path='/tour' />
          <Handbook path='/handbook' />
          <Resources path='/resources' />
          <Apply path='/apply' />

        </Router>
      </div>
    );
  }
}

export default App;
