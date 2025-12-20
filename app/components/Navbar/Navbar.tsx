'use client';

import { useRef, useState } from 'react';
import { BsFillMoonFill } from 'react-icons/bs';
import { getTranslations } from '../i18n/getTranslations';
import './_Navbar.scss';
import logoWhite from './img/logoWhite.png';

export default function Navbar() {
  const [showHamburger, setShowHamburger] = useState(false);
  const hamburgerToggle = useRef<HTMLInputElement | null>(null);
  const t = getTranslations()

  const hamburgerHandler = () => {
    if (showHamburger) {
      setShowHamburger(false);
      if (hamburgerToggle.current) {
        hamburgerToggle.current.checked = false;
      }
      document.body.style.overflowY = 'auto';
    } else {
      setShowHamburger(true);
      if (hamburgerToggle.current) {
        hamburgerToggle.current.checked = true;
      }
      document.body.style.overflowY = 'hidden';
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-logo-container">
        <img
          className="nav-logo-name"
          src={logoWhite.src}
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
        <div className={`toggle-menu ${showHamburger && 'show-toggle-menu'}`}>
          <ul className="toggle-menu-content">
            <li>
              <a href="#hero">{t("nav.home")}</a>
            </li>
            <li>
              <a href="#projects">{t("nav.projects")}</a>
            </li>
            <li>
              <a href="#about">{t("nav.about")}</a>
            </li>
            <li>
              <a href="contact">{t("nav.contact")}</a>
            </li>
            <li>
              <BsFillMoonFill className="nav-dark-light-toggle" />
            </li>
          </ul>
        </div>
      </div>
      <ul className="flex-navigation">
        <li>
          <a href="#hero">{t("nav.home")}</a>
        </li>
        <li>
          <a href="#projects">{t("nav.projects")}</a>
        </li>
        <li>
          <a href="#about">{t("nav.about")}</a>
        </li>
        <li>
          <a href="contact">{t("nav.contact")}</a>
        </li>
        <BsFillMoonFill className="nav-dark-light-toggle" />
      </ul>
    </nav>
  );
}
