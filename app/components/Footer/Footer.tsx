'use client';

import { BsFillArrowUpCircleFill as ArrowUp, BsGithub } from 'react-icons/bs';
import { FaCodepen } from 'react-icons/fa';
import './_Footer.scss';

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="copyright">&copy; 2022</div>
        <div className="footer-icons">
          <a href="https://github.com/druckmax/" target="_blank" rel="noreferrer">
            <BsGithub />
          </a>
          <a href="https://codepen.io/druckmax" target="_blank" rel="noreferrer">
            <FaCodepen />
          </a>
        </div>
        <div className="scroll-to-top">
          <a href="#hero">
            <ArrowUp className="arrow-up" />
          </a>
        </div>
      </div>
    </footer>
  );
}
