'use client';

import React, { useContext } from 'react';
import './_Footer.scss';
import { MainContext } from '@/app/context/Context';
import { BsGithub, BsFillArrowUpCircleFill as ArrowUp } from 'react-icons/bs';
import { FaCodepen } from 'react-icons/fa';

export default function Footer() {
  const context = useContext(MainContext);

  if (!context) {
    return null;
  }

  const { heroScrollHandler, heroRef } = context;

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
        {/* <div>Impressum</div> */}
        <div className="scroll-to-top">
          <ArrowUp onClick={() => heroScrollHandler(heroRef)} className="arrow-up" />
        </div>
      </div>
    </footer>
  );
}
