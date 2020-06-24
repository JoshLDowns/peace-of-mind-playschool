import React from "react";

const FooterForm = (props) => {
  return (
    <div id="footer-form">
      <div id="form-left">
        <label htmlFor="name">
          Name:
          <input
            name="name"
            id="form-name"
            className="form-input-left"
            onChange={props.handleInput}
            value={props.formName}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            name="email"
            id="form-email"
            type="email"
            className="form-input-left"
            onChange={props.handleInput}
            value={props.formEmail}
          />
        </label>
        <button
          id="form-submit"
          className="footer-button"
          type="submit"
          onClick={props.handleSubmit}
        >
          Submit
        </button>
      </div>
      <div className="page-break-vertical">
        <div className="break-one-vertical"></div>
        <div className="break-two-vertical"></div>
        <div className="break-one-vertical"></div>
      </div>
      <div id="form-right">
        <label className="label-right" htmlFor="message">
          Message:
          <textarea
            name="message"
            id="form-message"
            className="form-input-right"
            onChange={props.handleInput}
            value={props.formMessage}
          />
        </label>
      </div>
    </div>
  );
}

export default FooterForm;
