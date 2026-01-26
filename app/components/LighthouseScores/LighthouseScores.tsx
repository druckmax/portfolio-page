import { getScores, type Score } from './getLighthouseScores';
import './_LighthouseScores.scss';

export default async function LighthouseScores() {
  const scores = await getScores();
  if (!scores) return null;

  return (
    <section className="lighthouse">
      <Metric score={scores.performance} />
      <Metric score={scores.accessibility} />
      <Metric score={scores.bestPractices} />
      <Metric score={scores.seo} />
    </section>
  );
}

function Metric({ score }: { score: Score }) {
  const { label, score: value } = score;
  const level = value >= 90 ? 'good' : value >= 50 ? 'ok' : 'bad';

  return (
    <div className={`score score--${level}`}>
      <span className="score__value">{value}</span>
      <span className="score__label">{label}</span>
    </div>
  );
}
