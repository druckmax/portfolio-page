'use client';

import Card from '../Card/Card';
import { getTranslations } from '../i18n/getTranslations';
import './_Work.scss';
import commander from './img/commander.png';
import venu from './img/preview-venu.png';
import woerterwald from './img/woerterwald.png';

const projects = [
  {
    title: 'Wörterwald',
    year: '2025',
    color: '#9EB895',
    description:
      'A Wortify clone in calm forest environment. Creates a new game at midnight everyday',
    img: woerterwald,
    url: '',
    repo: 'https://github.com/WoerterWald/woerter_wald',
    techStack: ['NextJs', 'MongoDB', 'Mongoose', 'Github Actions'],
  },
  {
    title: 'Ink Patrol',
    year: '2023',
    color: '#69629E',
    description:
      'Tool that lets users read, write, assign, review translations, including a version control.',
    img: commander,
    url: '',
    repo: '',
    techStack: ['NextJs', 'Prisma', 'PostgreSQL'],
  },
  {
    title: 'Venu',
    year: '2023',
    color: '#0168B5',
    description:
      'A platform connecting artists with venues. Sign up as an artist to reach registered venues.',
    img: venu,
    url: 'https://venu-frontend.onrender.com',
    repo: 'https://github.com/Final-Countdown-Team/Venu-Frontend',
    techStack: ['React', 'Express', 'MongoDB', 'Mongoose'],
  },
];

export type Project = (typeof projects)[number];

export default function Work() {
  const t = getTranslations();
  return (
    <div id="projects" className="work-container">
      <div className="content-container">
        <div className="work-heading-container">
          <h2>{t('projects.headline')}</h2>
        </div>
        <div className="github-container">
          {projects.map((project) => {
            return <Card key={project.color + project.title} project={project} />;
          })}
        </div>
      </div>
    </div>
  );
}
