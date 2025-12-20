'use client';

import React, { useContext } from 'react';
import './_Hero.scss';
import test_avatar from './img/avatar_bg_edit_01_transparent_small_0.5.png';
import { MainContext } from '@/app/context/Context';

export default function Hero() {
  const context = useContext(MainContext);

  if (!context) {
    return null;
  }

  const { heroScrollHandler, contactRef } = context;

  return (
    <div className="hero-container">
      <div className="hero-container--text">
        <h1>Hey I&apos;m Max...</h1>
        <div className="sub-heading">
          <p>I&apos;m a Junior Web Developer and Designer based in Leipzig.</p>
          <button onClick={() => heroScrollHandler(contactRef)} className="btn hero-btn">
            Contact me
          </button>
        </div>
      </div>

      <img className="hero-portrait" src={test_avatar.src} alt="Comic portrait of me" />
    </div>
  );
}
