'use client';

import { getTranslations } from '../i18n/getTranslations';
import './_About.scss';

import mongodb from './img/mongodb.png';
import nextjs from './img/nextjs.png';
import nodejs from './img/nodejs.png';
import prisma from './img/prisma.png';
import react from './img/react.png';
import sass from './img/sass.png';
import tailwind from './img/tailwind.png';
import typescript from './img/typescript.png';

const iconMap = [
  { src: nextjs.src, alt: 'Nextjs icon' },
  { src: react.src, alt: 'react icon' },
  { src: typescript.src, alt: 'typescript icon' },
  { src: tailwind.src, alt: 'tailwind icon' },
  { src: sass.src, alt: 'sass icon' },
  { src: prisma.src, alt: 'prisma icon' },
  { src: mongodb.src, alt: 'mongodb icon' },
  { src: nodejs.src, alt: 'nodejs icon' },
];

export default function About() {
  const t = getTranslations();
  return (
    <div id="about" className="about-background-wrapper">
      <div className="about-container">
        <div className="about-content">
          <h2>{t('about.headline')}</h2>
          <h3>{t('about.headlineGeneral')}</h3>
          <div className="general">
            <p>{t('about.general')}</p>
            <p>{t('about.generalWork')}</p>
            <p>{t('about.generalMisc')}</p>
          </div>
          <div className="about-section">
            <div className="techStack">
              <h3>{t('about.headlineTech')}</h3>
              <p>{t('about.tech')}</p>
            </div>
            <div className="techStack-icons">
              {iconMap.map((icon) => {
                return (
                  <div key={icon.src}>
                    <img width={50} src={icon.src} alt={icon.alt} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
