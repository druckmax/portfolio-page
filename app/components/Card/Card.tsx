'use client';

import type { CSSProperties } from 'react';
import type { Project } from '../Work/Work';
import './_Card.scss';
import { BsGithub, BsGlobe } from 'react-icons/bs';

interface CardProps {
  project: Project;
}

export default function Card({ project }: CardProps) {
  const { img, color, title, year, description, repo, url, techStack } = project;
  return (
    <div className="card-container" style={{ '--project-color': color } as CSSProperties}>
      <div className="img-wrapper">
        <img src={img.src} alt="preview of respective project" />
      </div>
      <div className="card-description">
        <h3>
          {title}
          <span> - {year}</span>
        </h3>
        <p>{description}</p>
      </div>
      <div className="card-tech">
        {techStack.map((tech) => (
          <span key={title + tech}>{tech}</span>
        ))}
      </div>
      <div className="card-links">
        {!url ? (
          <span className="disabled">
            <BsGlobe />
            <span>Coming soon...</span>
          </span>
        ) : (
          <a href={url} target="_blank" rel="noreferrer">
            <BsGlobe />
            <span>Live</span>
          </a>
        )}
        <a href={repo} target="_blank" rel="noreferrer">
          <BsGithub />
          <span>Github</span>
        </a>
      </div>
    </div>
  );
}
