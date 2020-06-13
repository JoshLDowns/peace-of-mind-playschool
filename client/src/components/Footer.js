import React, { Component } from "react";
import FooterForm from "./FooterForm.js";

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      display: "footer-docked",
      apply: "Apply",
      footerText: "footer-text full-opacity",
      footerFormDisplay: true,
      formName: "",
      formEmail: "",
      formMessage: "",
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

  handleInput = (e) => {
    this.setState({
      [`${
        e.target.id.split("-")[0] +
        e.target.id.split("-")[1].slice(0, 1).toUpperCase() +
        e.target.id.split("-")[1].slice(1)
      }`]: e.target.value,
    });
  };

  resetForm = () => {
    this.setState({ formName: "", formEmail: "", formMessage: "" });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (
      this.state.formName === "" ||
      this.state.formEmail === "" ||
      this.state.formMessage === ""
    ) {
      return alert(
        "Please fill in all of the fields! Thank you for trying to reach out!"
      );
    }
    fetch("/newContact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this.state.formName,
        email: this.state.formEmail,
        message: this.state.formMessage,
      }),
    })
      .then((res) => res.json())
      .then((jsonObj) => {
        this.setState({
          status: jsonObj.status,
        });
      });
    this.resetForm();
  };

  render() {
    return (
      <div id="footer" className={this.state.display}>
        <div className="page-break">
          <div className="break-two"></div>
          <div className="break-one"></div>
        </div>
        <div id="footer-control">
          <div id="footer-address">
            <p className={this.state.footerText}>
              Located atop Georgia Mt. Vermont
            </p>
            <p className={this.state.footerText}>802.578.5451</p>
          </div>
          <p id="apply-button" onClick={this.handleApply}>
            {this.state.apply}
          </p>
        </div>
        <div id="footer-form-wrapper">
          <h2 className="footer-text footer-title">
            We are currently full, but feel free to inquire about future
            availability!
          </h2>
          {this.state.footerFormDisplay !== "thank-you" && (
            <FooterForm
              handleInput={this.handleInput}
              handleSubmit={this.handleSubmit}
              formName={this.state.formName}
              formEmail={this.state.formEmail}
              formMessage={this.state.formMessage}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Footer;
