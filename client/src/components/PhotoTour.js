import React, { Component } from "react";
import Carousel from './Carousel.js';

class PhotoTour extends Component {
  constructor() {
    super();
    this.state = {
      playyardThumbArray: [
        "py1-thumb",
        "py2-thumb",
        "py3-thumb",
        "py4-thumb",
        "py5-thumb",
        "py6-thumb",
        "py7-thumb",
        "py8-thumb",
        "py9-thumb",
      ],
      atplayThumbArray: [
        "ap1-thumb",
        "ap2-thumb",
        "ap3-thumb",
        "ap4-thumb",
        "ap5-thumb"
      ]
    };
  }

  render() {
    return (
      <div id="photo-tour">
        <div className="page-break">
          <div className="break-one"></div>
          <div className="break-two"></div>
        </div>
        <div className="photo-carousel-container">
          <h1 className="title">The Play Yard</h1>
          <Carousel currentPhoto="/images/playyard/py1.png" folder="playyard" thumbArray={this.state.playyardThumbArray} />
          <br />
          <h1 className="title">At Play</h1>
          <Carousel currentPhoto="/images/atplay/ap1.png" folder="atplay" thumbArray={this.state.atplayThumbArray} />
        </div>
      </div>
    );
  }
}

export default PhotoTour;
