import React from "react";
import './_About.scss'
import { MainContext } from "../../Context";
import { useContext } from "react";

import css from './img/css.png'
import html from './img/html.png'
import javascript from './img/javascript.png'
import mongodb from './img/mongodb.png'
import nodejs from './img/nodejs.png'
import react from './img/react.png'
import sass from './img/sass.png'

function About() {
  const {aboutRef} = useContext(MainContext)
  return (
    <div ref={aboutRef} className="about-background-wrapper">
      <div className="about-container">
        <div className="about-content">
          <h2>About</h2>
          <p className="general">
            I enjoy giving 100% to create appealing designs and translate them to be
            fully responsive and look amazing on any resolution. I always look for
            new challenges and never stop learning and improving my skills.
          </p>
          <div className="about-section technical">
            <h3>Technical</h3>
            <p>
              I call HTML, CSS, Sass and Javascript my home base. Currently I am
              learning React.js and looking forward to extend my skills towards the
              backend (dark) side. For that I’ve got Node.js, Express.js and MongoDB
              on my list, to eventually build a complete MERN stack.
            </p>
          </div>
          <div className="technologies-icons">
            <img src={html} alt="html icon" />
            <img src={css} alt="css icon" />
            <img src={sass} alt="sass icon" />
            <img src={javascript} alt="javascript icon" />
            <img src={react} alt="react icon" />
            <img src={nodejs} alt="nodejs icon" />
            <img src={mongodb} alt="mongodb icon" />
          </div>
          <div className="about-section personal">
            <h3>Personal</h3>
            <p>
              I grew up in a small town near Frankfurt am Main, and moved to Leipzig
              in 2015. I studied Sound and Music Production in Darmstadt and call
              myself an ambitous amateur boulderer/climber.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
