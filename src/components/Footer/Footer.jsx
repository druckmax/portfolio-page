import React from "react";
import "./_Footer.scss";
import { MainContext } from "../../Context";
import { useContext } from "react";

import { BsGithub, BsFillArrowUpCircleFill as ArrowUp } from "react-icons/bs";
import { FaCodepen } from "react-icons/fa";

function Footer() {
  const {heroScrollHandler, heroRef} = useContext(MainContext)

  return (
    <footer>
      <div className="footer-content">
        <div className="copyright">&copy; 2022</div>
        <div className="footer-icons">
          <a
            href="https://github.com/druckmax/"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
          <a
            href="https://codepen.io/druckmax"
            target="_blank"
            rel="noreferrer"
          >
            <FaCodepen />
          </a>
        </div>
        {/* <div>Impressum</div> */}
        <div className="scroll-to-top">
          <ArrowUp onClick={() => heroScrollHandler(heroRef)} className="arrow-up"/>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
