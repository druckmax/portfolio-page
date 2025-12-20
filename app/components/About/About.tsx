'use client';

import React, { useContext } from 'react';
import './_About.scss';
import { MainContext } from '@/app/context/Context';

import css from './img/css.png';
import html from './img/html.png';
import javascript from './img/javascript.png';
import mongodb from './img/mongodb.png';
import nodejs from './img/nodejs.png';
import react from './img/react.png';
import sass from './img/sass.png';

export default function About() {
  const context = useContext(MainContext);

  if (!context) {
    return null;
  }

  const { aboutRef } = context;

  return (
    <div ref={aboutRef} className="about-background-wrapper">
      <div className="about-container">
        <div className="about-content">
          <h2>About</h2>
          <p className="general">
            I enjoy giving 100% to create appealing designs and translate them to be fully
            responsive and to look amazing on every device. I always seek new challenges and never
            stop learning and improving my skills.
          </p>
          <div className="about-section technical">
            <h3>Technical</h3>
            <p>
              I feel most comfortable being around HTML, CSS, Sass and Javascript. Currently I am
              learning React.js and looking forward to extend my skills towards the backend (dark)
              side. For that I&apos;ve got Node.js, Express.js and MongoDB on my list, to eventually
              build a complete MERN stack.
            </p>
          </div>
          <div className="technologies-icons">
            <img src={html.src} alt="html icon" />
            <img src={css.src} alt="css icon" />
            <img src={sass.src} alt="sass icon" />
            <img src={javascript.src} alt="javascript icon" />
            <img src={react.src} alt="react icon" />
            <img src={nodejs.src} alt="nodejs icon" />
            <img src={mongodb.src} alt="mongodb icon" />
          </div>
          <div className="about-section personal">
            <h3>Personal</h3>
            <p>
              I grew up in a small town near Frankfurt am Main, and moved to Leipzig in 2015. I
              studied Sound and Music Production in Darmstadt and call myself an ambitious amateur
              boulderer/climber.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
