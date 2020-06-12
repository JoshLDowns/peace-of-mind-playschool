import React, { Component } from "react";
import { Link } from "@reach/router";
import logoNoText from "../styles/src_img/Logo_no_text.png";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDown: "nav-drop-down-inactive"
    };
  }

  handleDropDown = () => {
    this.setState({
      dropDown: this.state.dropDown === "nav-drop-down-active" ? "nav-drop-down-inactive" : "nav-drop-down-active"
    })
  }

  render() {
    return (
      <div id="nav-bar">
        <div id="nav-drop-down" className={this.state.dropDown} >
        <Link
            to="/"
            id="/"
            onClick={() => {this.props.handleLink(); this.handleDropDown()}}
            className={this.props.currentPage === "/" ? "clicked-link" : "link"}
          >
            Home
          </Link>
          <Link
            to="/tour"
            id="/tour"
            onClick={() => {this.props.handleLink(); this.handleDropDown()}}
            className={
              this.props.currentPage === "/tour" ? "clicked-link" : "link"
            }
          >
            Gallery
          </Link>
          <Link
            to="/handbook"
            id="/handbook"
            onClick={() => {this.props.handleLink(); this.handleDropDown()}}
            className={
              this.props.currentPage === "/handbook" ? "clicked-link" : "link"
            }
          >
            Handbook
          </Link>
          <Link
            to="/resources"
            id="/resources"
            onClick={() => {this.props.handleLink(); this.handleDropDown()}}
            className={
              this.props.currentPage === "/resources" ? "clicked-link" : "link"
            }
          >
            Resources
          </Link>
          <div className="page-break">
          <div className="break-one"></div>
          <div className="break-two"></div>
        </div>
        </div>
        <div id="drop-down-button" onClick={this.handleDropDown}>
            <div className="button-bar"></div>
            <div className="button-bar"></div>
            <div className="button-bar"></div>
        </div>
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
            Gallery
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
