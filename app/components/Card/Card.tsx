'use client';

import type { ReactNode } from 'react';
import './_Card.scss';

interface CardProps {
  img: { src: string };
  title: string;
  children: ReactNode;
  url: string;
  repo?: string;
}

export default function Card({ img, title, children, url, repo }: CardProps) {
  return (
    <div className="card-container">
      <div className="img-wrapper">
        <a href={url} target="_blank" rel="noreferrer">
          <img src={img.src} alt="preview of respective project" />
        </a>
      </div>
      <div className="card-description">
        <h3>{title}</h3>
        <p>
          {children}{' '}
          {repo && (
            <a href={repo} target="_blank" rel="noreferrer">
              Link to repository
            </a>
          )}
        </p>
      </div>
    </div>
  );
}
