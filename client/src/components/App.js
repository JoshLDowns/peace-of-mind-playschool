import React, { Component } from "react";
import { Router } from "@reach/router";
import "../styles/App.css";
import NavBar from "./NavBar.js";
import Home from "./Home.js";
import PhotoTour from "./PhotoTour.js";
import Handbook from "./Handbook.js";
import Resources from "./Resources.js";
import Footer from "./Footer.js";
import About from "./About.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: "/"
    };
  }

  //event handler for clicking on links in headbar
  handleLink = () => {
    this.setState({
      currentPage: window.location.pathname,
    });
  };

  //event handler for back and forward buttons
  browserButtonHandler = (event) => {
    this.setState({
      currentPage: event.target.location.path,
    });
  };

  //sets event listener for back and forward buttons on mount, and makes sure current page is correct in state in case of refresh
  componentDidMount() {
    window.onpopstate = this.browserButtonHandler;
    this.setState({
      currentPage: window.location.pathname,
    });
  }

  //makes sure the currentPage is correct in state on componenet update
  componentDidUpdate() {
    if (this.state.currentPage !== window.location.pathname) {
      this.setState({
        currentPage: window.location.pathname,
      });
    }
  }

  render() {
    return (
      <div id="main-container">
        <NavBar currentPage={this.state.currentPage} handleLink={this.handleLink} />
        <Router>
          <Home path="/" />
          <About path="/about" />
          <PhotoTour path="/tour" />
          <Handbook path="/handbook" />
          <Resources path="/resources" />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
