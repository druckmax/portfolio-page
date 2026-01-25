'use client';

import { BsGithub } from 'react-icons/bs';
import { FaArrowUp as ArrowUp, FaCopyright } from 'react-icons/fa';
import './_Footer.scss';
import { getTranslations } from '../i18n/getTranslations';
import gradientHeart from './img/gradientHeart.svg';

export default function Footer() {
  const t = getTranslations();
  const year = new Date().getFullYear();
  return (
    <footer>
      <a href="#home" className="backToTop">
        {t('footer.backToTop')}
        <ArrowUp className="arrowUp" />
      </a>
      <div className="footer-content">
        <div>
          <div className="withLove">
            Made with
            <img src={gradientHeart.src} alt="Gradient Heart" height={12} loading="lazy" />
            in Leipzig
          </div>
          <div className="copyright">
            <FaCopyright /> {year} {t('footer.author')}
          </div>
        </div>

        <a href="https://github.com/druckmax/" target="_blank" rel="noreferrer" aria-label="Github">
          <BsGithub />
        </a>
      </div>
    </footer>
  );
}
