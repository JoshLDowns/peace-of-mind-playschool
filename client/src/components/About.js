import React from "react";

const About = () => {
  return (
    <div id="about">
      <div id="about-body">
        <div className="about-img-text-wrapper mobile-top">
          <div className="about-text-wrapper">
            <p>
              From the time I was a little girl I knew that I wanted to work
              with children when I grew up. I spent 17 years in banking, then
              had my second child and just knew that was the right time to open
              my child care business. I was fortunate enough to have family
              caring for my children, however it’s still killed me to leave them
              every day. I knew my family could not do it forever, and I
              struggled to find a childcare provider that I could trust. My goal
              has always been to provide high-quality child care where
              Parents/caretakers can have “peace of mind” leaving their children
              every day.. I want children to feel at home when they are in my
              care.
            </p>
          </div>
          <div className="about-img-wrapper">
            <img
              src="/images/about/porch-swing.png"
              className="about-img"
              alt="On the porch"
            />
          </div>
        </div>
        <div className="about-img-text-wrapper">
          <div className="about-img-wrapper">
            <img
              src="/images/about/at-the-farm.png"
              className="about-img"
              alt="At the farm"
            />
          </div>
          <div className="about-text-wrapper">
            <p>
              My program has a strong focus on nature. I love being outside and
              exploring all of the wonderful things that nature has to provide.
              In my spare time I enjoy hiking, going for walks, working in my
              gardens, taking my kids to the beach, and spending time with my
              family. I have two fur babies named CJ and Trixie. They are
              mixed-breed old gals who love spending time with all of the kids!
              <br />
              <br />
              I am constantly continuing my education in Early Childhood
              Education and working towards a degree. I love learning about
              children’s social and emotional development, fine and gross motor
              skills and honoring their strengths. I strive to give them an
              environment that empowers them to learn, discover, and be their
              best selves.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
