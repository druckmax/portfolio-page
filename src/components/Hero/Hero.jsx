import React from "react";
import "./_Hero.scss";
import { useContext } from "react";

// import test_avatar from "./img/avatar-white-edit.png";
import test_avatar from "./img/avatar_bg_edit_01_transparent_small_0.5.png";
import { MainContext } from "../../Context";

function Hero() {
  const { heroScrollHandler, contactRef } = useContext(MainContext);

  return (
    <div className="hero-container">
      <div className="hero-container--text">
        <h1>Hey I'm Max...</h1>
        <div className="sub-heading">
          <p>I'm a Junior Web Developer and Designer based in Leipzig.</p>
          <button
            onClick={() => heroScrollHandler(contactRef)}
            className="btn hero-btn"
          >
            Contact me
          </button>
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
