import React, { Component } from "react";
import { Link } from "@reach/router";

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      display: "footer-docked",
      apply: "Apply",
      footerText: "footer-text full-opacity",
    };
  }

  handleApply = () => {
    this.setState({
      display:
        this.state.display === "footer-docked"
          ? "footer-open"
          : "footer-docked",
      apply: this.state.apply === "Apply" ? "X" : "Apply",
      footerText:
        this.state.footerText === "footer-text full-opacity"
          ? "footer-text no-opacity"
          : "footer-text full-opacity",
    });
  };

  render() {
    return (
      <div id="footer" className={this.state.display}>
        <div className="page-break">
          <div className="break-two"></div>
          <div className="break-one"></div>
        </div>
        <div id="footer-control">
          <p className={this.state.footerText}>
            Located atop Georgia Mt. Vermont - 999-999-9999
          </p>
          <p id="apply-button" onClick={this.handleApply}>
            {this.state.apply}
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
