'use client';

import Card from '../Card/Card';
import { getTranslations } from '../i18n/getTranslations';
import './_Work.scss';
import venu from './img/preview-venu.png';
import woerterwald from './img/woerterwald.png';
import commander from './img/commander.png';

const projects = [
  {
    title: 'Wörterwald',
    year: '2025',
    color: '#9EB895',
    description: 'A Wortify clone, that creates a new game at midnight',
    img: woerterwald,
    url: '',
    repo: '',
    techStack: ['NextJs', 'MongoDB', 'CronJobs'],
  },
  {
    title: 'Translation Commander',
    year: '2023',
    color: '#69629E',
    description: 'Tool that lets users read, write, assign, review translations',
    img: commander,
    url: '',
    repo: '',
    techStack: ['NextJs', 'SQL', 'Prisma'],
  },
  {
    title: 'Venu',
    year: '2023',
    color: '#0168B5',
    description: 'A platform that connects artists with venues',
    translationKey: 'project_03',
    img: venu,
    url: '',
    repo: '',
    techStack: ['React', 'MongoDB', 'Express'],
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
            return <Card key={project.url} project={project} />;
          })}
        </div>
      </div>
    </div>
  );
}
