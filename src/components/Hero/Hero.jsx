import React from "react";
import test_avatar from "./img/avatar-grey-opaque.png";

import "./_Hero.scss";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-container--text">
        <h1>Hey I'm Max...</h1>
        <div className="sub-heading">
          <p>I'm a Junior Web Developer and Designer based in Leipzig.</p>
          <button className="btn hero-btn">Contact me</button>
        </div>
      </div>

      <img
        className="hero-portrait"
        src={test_avatar}
        alt="Comic portrait of me"
      />
    </div>
  );
}

export default Hero;
