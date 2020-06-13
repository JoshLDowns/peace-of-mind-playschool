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
                with high quality, affordable child care with the belief that
                children must be respected, and that children love to learn. I
                believe in providing children with an environment where they
                have space to explore and create, collaborate with peers and
                learn through nature. Nature offers infinite ways to support a
                child’s cognitive, physical, and emotional development, and
                interacting with natural environments and materials allows
                children to learn by doing, and experiment with ideas. When
                children are engaged in learning about science and nature, they
                are also learning strategies for active exploration, thinking
                and reasoning, and developing working theories for making sense
                of the natural, social, physical and material worlds around
                them. By promoting learning through nature, I hope to foster the
                development of nurturing, peaceful, and caring citizens. My
                program reflects the understanding that play and outdoor
                exploration is essential to children’s health and well-being,
                and foundational to their learning. I promise to nurture your
                child, provide a safe and loving environment, and give them the
                freedom to explore and create.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
