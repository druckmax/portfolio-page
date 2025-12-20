'use client';

import { getTranslations } from '../i18n/getTranslations';
import './_About.scss';

import css from './img/css.png';
import html from './img/html.png';
import javascript from './img/javascript.png';
import mongodb from './img/mongodb.png';
import nodejs from './img/nodejs.png';
import react from './img/react.png';
import sass from './img/sass.png';

const iconMap = [
  { src: html.src, alt: 'html icon' },
  { src: css.src, alt: 'css icon' },
  { src: sass.src, alt: 'sass icon' },
  { src: javascript.src, alt: 'javascript icon' },
  { src: react.src, alt: 'react icon' },
  { src: nodejs.src, alt: 'nodejs icon' },
  { src: mongodb.src, alt: 'mongodb icon' },
];

export default function About() {
  const t = getTranslations();
  return (
    <div id="about" className="about-background-wrapper">
      <div className="about-container">
        <div className="about-content">
          <h2>{t('about.headline')}</h2>
          <p className="general">{t('about.general')}</p>
          <div className="about-section technical">
            <h3>{t('about.headlineTech')}</h3>
            <p>{t('about.tech')}</p>
          </div>
          <div className="technologies-icons">
            {iconMap.map((icon) => {
              return <img key={icon.src} src={icon.src} alt={icon.alt} />;
            })}
            <img src={html.src} alt="html icon" />
            <img src={css.src} alt="css icon" />
            <img src={sass.src} alt="sass icon" />
            <img src={javascript.src} alt="javascript icon" />
            <img src={react.src} alt="react icon" />
            <img src={nodejs.src} alt="nodejs icon" />
            <img src={mongodb.src} alt="mongodb icon" />
          </div>
          <div className="about-section personal">
            <h3>{t('about.headlinePersonal')}</h3>
            <p>{t('about.personal')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
