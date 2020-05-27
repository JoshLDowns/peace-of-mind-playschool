import React from "react";
import { Link } from "@reach/router";

function NavBar(props) {
  return (
    <div id="nav-bar">
      <div id="main-links">
        <div id="logo-wrapper">
          <img id="logo" src="http://placecorgi.com/300/300" />
        </div>
        <div id="contact-info">
          <p className="logo-text">Georgia VT</p>
          <p className="logo-text">999.999.9999</p>
        </div>
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/tour" className="link">
          Take a Tour
        </Link>
        <Link to="/handbook" className="link">
          Handbook
        </Link>
        <Link to="/resources" className="link">
          Resources
        </Link>
      </div>
      <div ID="apply-link">
        <Link to="/apply" className="link">
          Apply
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
