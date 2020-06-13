import React, { Component } from "react";

class Resources extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div id="resources">
        <div id="resource-body">
          <div id="resource-wrapper">
            <div id="online-resources">
              <h1 className="title">Online Resources</h1>
              <div id="link-wrapper">
                <div className="resource-links">
                  <a
                    className="resource-link"
                    href="http://dcf.vermont.gov/childcare/parents"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>VT Childcare Information for Parents</p>
                  </a>
                  <a
                    className="resource-link"
                    href="https://www.ncssinc.org/children-youth-family-services/family-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>Franklin County Family Center</p>
                  </a>
                  <a
                    className="resource-link"
                    href="http://dcf.vermont.gov/benefits/ccfap"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>Childcare Financial Assistance</p>
                  </a>
                </div>
                <div className="page-break-vertical">
                  <div className="break-two-vertical"></div>
                </div>
                <div className="resource-links">
                  <a
                    className="resource-link"
                    href="https://www.healthvermont.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>Health Department</p>
                  </a>
                  <a
                    className="resource-link"
                    href="https://www.investinvermont.org/borrowers/early-care-and-learning/building-bright-spaces-for-bright-futures.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>Building Bright Spaces</p>
                  </a>
                  <a
                    className="resource-link"
                    href="https://www.letsgrowkids.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>Let's Grow Kids</p>
                  </a>
                </div>
              </div>
            </div>
            <div id="documents">
              <h1 className="title">Documents</h1>
              <div id="doc-wrapper">
                <div className="docs">
                  <a
                    className="resource-link"
                    href={`/pdffiles/parent-provider-handbook.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>Parent/Provider Handbook</p>
                  </a>
                  <a
                    className="resource-link"
                    href={`/pdffiles/enrollment-agreement.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>Enrollment Agreement</p>
                  </a>
                  <a
                    className="resource-link"
                    href={`/pdffiles/general-health-examination-form.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>General Health Examination Form</p>
                  </a>
                  <a
                    className="resource-link"
                    href={`/pdffiles/medication-administration-form.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>Medication Administration Form</p>
                  </a>
                  <a
                    className="resource-link"
                    href={`/pdffiles/medical-communication-authorization.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>Medical Communication Authorization</p>
                  </a>
                </div>
                <div className="page-break-vertical">
                  <div className="break-two-vertical"></div>
                </div>
                <div className="docs">
                  <a
                    className="resource-link"
                    href={`/pdffiles/asthma-action-plan.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>Asthma Action Plan</p>
                  </a>
                  <a
                    className="resource-link"
                    href={`/pdffiles/permission-form-but-spray.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>Bug Spray Permission Form</p>
                  </a>
                  <a
                    className="resource-link"
                    href={`/pdffiles/permission-form-sunscreen.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>Sunscreen Permission Form</p>
                  </a>
                  <a
                    className="resource-link"
                    href={`/pdffiles/permission-form-water-play.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>Water Play Permission Form</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resources;
