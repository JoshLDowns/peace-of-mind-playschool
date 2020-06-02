import React, { Component } from "react";
import { Link } from "@reach/router";
import logoNoText from "../styles/src_img/Logo_no_text.png";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="nav-bar">
        <div id="main-links">
          <Link
            to="/"
            id="/"
            onClick={this.props.handleLink}
            className={this.props.currentPage === "/" ? "clicked-link" : "link"}
          >
            Home
          </Link>
          <Link
            to="/tour"
            id="/tour"
            onClick={this.props.handleLink}
            className={
              this.props.currentPage === "/tour" ? "clicked-link" : "link"
            }
          >
            Take a Tour
          </Link>
          <Link
            to="/handbook"
            id="/handbook"
            onClick={this.props.handleLink}
            className={
              this.props.currentPage === "/handbook" ? "clicked-link" : "link"
            }
          >
            Handbook
          </Link>
          <Link
            to="/resources"
            id="/resources"
            onClick={this.props.handleLink}
            className={
              this.props.currentPage === "/resources" ? "clicked-link" : "link"
            }
          >
            Resources
          </Link>
        </div>
        <div id="nav-bar-img-wrapper">
          <img className="logo-small" src={logoNoText} alt="logo" />
        </div>
      </div>
    );
  }
}

export default NavBar;
