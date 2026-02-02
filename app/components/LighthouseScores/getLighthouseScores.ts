import { cache } from 'react';

export type Score = {
  label: string;
  score: number;
};

type Scores = {
  performance: Score;
  accessibility: Score;
  bestPractices: Score;
  seo: Score;
} | null;

export const getScores = cache(async (): Promise<Scores> => {
  const url = process.env.LIGHTHOUSE_URL;

  const options = {
    method: 'POST',
    headers: { 'x-api-key': process.env.GEEKFLARE_API_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({ url, device: 'desktop' }),
  };

  const res = await fetch('https://api.geekflare.com/lighthouse', {
    ...options,
    next: { revalidate: 60 * 60 * 24 }, // 24h cache
  });

  if (!res.ok) {
    return null;
  }

  const data = await res.json();

  const lighthouseRes = await fetch(data.data, {
    next: { revalidate: 60 * 60 * 24 },
  });

  if (!lighthouseRes.ok) {
    throw new Error('Failed to fetch Lighthouse JSON');
  }

  const lighthouse = await lighthouseRes.json();
  const categories = lighthouse.categories;

  return {
    performance: {
      label: categories.performance.title,
      score: Math.round(categories.performance.score * 100),
    },
    accessibility: {
      label: categories.accessibility.title,
      score: Math.round(categories.accessibility.score * 100),
    },
    bestPractices: {
      label: categories['best-practices'].title,
      score: Math.round(categories['best-practices'].score * 100),
    },
    seo: { label: categories.seo.title, score: Math.round(categories.seo.score * 100) },
  };
});
