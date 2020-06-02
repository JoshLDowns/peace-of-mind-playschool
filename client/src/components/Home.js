import React, { Component } from "react";
import logo from "../styles/src_img/Logo.png";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div id="home">
        <div className="page-break">
          <div className="break-one"></div>
          <div className="break-two"></div>
        </div>
        <div id="home-body">
          <div id="home-img-wrapper">
            <img
              src={logo}
              className="logo-large"
              alt="Peace of Mind Playschool"
            />
          </div>
          <div id="home-text">
            <div className="scroll-div">
              <p className="philosophy">
                I opened Peace of Mind Playschool in 2018 to provide families
                with a high quality, structured childcare and preschool program.
                My goal is to provide a developmentally appropriate program that
                respects each child as an individual in a loving environment
                that is fun, educational and safe. I will provide curriculum and
                opportunities for growth that are developmentally appropriate,
                help children feel confident and self-reliant, and develop a
                sense of self-worth and foster good self-esteem. I will always
                take time to listen to their thoughts, feelings and ideas. My
                program reflects the understanding that play is essential to
                children’s health and well-being and foundational to their
                learning. I promise to nurture your child, provide protection,
                encouragement, security and stimulation. Families are assured
                that non- discrimination and respect for each child and their
                family and culture is always maintained in a professional
                manner.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
