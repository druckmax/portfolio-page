import React from "react";
import logoWhite from "./img/logoWhite.png";
import "./_Navbar.scss";

import { useState } from "react";

import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

function Navbar(scrollHandler) {
  const [showHamburger, setShowHamburger] = useState(false);

  const hamburgerHandler = () => {
    if (showHamburger) {
      setShowHamburger(false);
      document.body.style.overflowY = "auto";
    } else {
      setShowHamburger(true);
      document.body.style.overflowY = "hidden";
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-logo-container">
        <img
          className="nav-logo-name"
          src={logoWhite}
          alt="cursive font of the name as a logo"
        />
      </div>
      <div className="hamburger">
        <div className="hamburger-content">
          <input
            onClick={hamburgerHandler}
            type="checkbox"
            name="hamburgerToggle"
            id="hamburgerToggle"
          />
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`toggle-menu ${showHamburger && "show-toggle-menu"}`}>
          <ul className="toggle-menu-content">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Work</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <BsFillMoonFill className="nav-dark-light-toggle" />
            </li>
          </ul>
        </div>
      </div>
      <ul className='flex-navigation'>
        <li onClick={() => scrollHandler('hero')}>Home</li>
        <li onClick={() => scrollHandler('work')}>Work</li>
        <li onClick={() => scrollHandler('about')}>About</li>
        <li onClick={() => scrollHandler('contact')}>Contact</li>
        <BsFillMoonFill className="nav-dark-light-toggle" />
      </ul>
    </nav>
  );
}

export default Navbar;
