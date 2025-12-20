import { getTranslations } from '../i18n/getTranslations';
import './_Hero.scss';
import test_avatar from './img/avatar_bg_edit_01_transparent_small_0.5.png';

export default function Hero() {
  const t = getTranslations();
  return (
    <div id="hero" className="hero-container">
      <div className="hero-container--text">
        <h1>{t('hero.headline')}</h1>
        <div className="sub-heading">
          <p>{t('hero.subHeadline')}</p>
          <a href="#contact" className="btn hero-btn">
            {t('hero.cta')}
          </a>
        </div>
      </div>

      <img className="hero-portrait" src={test_avatar.src} alt="Comic portrait of me" />
    </div>
  );
}
