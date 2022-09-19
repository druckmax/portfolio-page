import React from "react";
import logoWhite from "./img/logoWhite.png";
import "./_Navbar.scss";

import { useContext, useState, useRef } from "react";
import { MainContext } from "../../Context";

import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

function Navbar() {
  const { heroRef, workRef, aboutRef, contactRef } = useContext(MainContext);
  const [showHamburger, setShowHamburger] = useState(false);
  const hamburgerToggle = useRef(null);

  const hamburgerHandler = () => {
    if (showHamburger) {
      setShowHamburger(false);
      console.log(hamburgerToggle.current)
      hamburgerToggle.current.checked = false;
      document.body.style.overflowY = "auto";
    } else {
      setShowHamburger(true);
      hamburgerToggle.current.checked = true;
      document.body.style.overflowY = "hidden";
    }
  };

  const scrollHandler = (currentRef) => {
    hamburgerHandler();
    
    let options = { behavior: "smooth", block: "center" };
    if (currentRef.current.className === "wrapper")
      options = { ...options, block: "start" };

    currentRef.current.scrollIntoView(options);
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
            ref={hamburgerToggle}
          />
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`toggle-menu ${showHamburger && "show-toggle-menu"}`}>
          <ul className="toggle-menu-content">
            <li onClick={() => scrollHandler(heroRef)}>Home</li>
            <li onClick={() => scrollHandler(workRef)}>Work</li>
            <li onClick={() => scrollHandler(aboutRef)}>About</li>
            <li onClick={() => scrollHandler(contactRef)}>Contact</li>
            <li>
              <BsFillMoonFill className="nav-dark-light-toggle" />
            </li>
          </ul>
        </div>
      </div>
      <ul className="flex-navigation">
        <li onClick={() => scrollHandler(heroRef)}>Home</li>
        <li onClick={() => scrollHandler(workRef)}>Work</li>
        <li onClick={() => scrollHandler(aboutRef)}>About</li>
        <li onClick={() => scrollHandler(contactRef)}>Contact</li>
        <BsFillMoonFill className="nav-dark-light-toggle" />
      </ul>
    </nav>
  );
}

export default Navbar;
