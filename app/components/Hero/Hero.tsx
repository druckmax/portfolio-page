import { getTranslations } from '../i18n/getTranslations';
import { CTA } from '../shared/CTA/CTA';
import './_Hero.scss';
import space_avatar from './img/space_avatar.png';

export default function Hero() {
  const t = getTranslations();
  return (
    <div id="hero" className="hero-container">
      <div className="hero-container--text">
        <h1>
          {t('hero.headline')}
          <span>&nbsp;{t('hero.headlineName')}</span>
        </h1>
        <div className="sub-heading">
          <p>{t('hero.subHeadline')}</p>
          <CTA className="hero-btn" asChild>
            <a href="#contact">{t('hero.cta')}</a>
          </CTA>
        </div>
      </div>

      <img className="hero-portrait" src={space_avatar.src} alt="Comic portrait of me" />
    </div>
  );
}
