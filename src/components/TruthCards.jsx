import { useScrollReveal } from '../hooks/useScrollReveal';

/** Individual truth card with staggered reveal delay */
function TruthCard({ emoji, text, delay }) {
  const ref = useScrollReveal();
  return (
    <div
      className="card truth-card reveal"
      ref={ref}
      style={{ transitionDelay: delay }}
    >
      <span className="truth-emoji" aria-hidden="true">{emoji}</span>
      <span className="truth-text">{text}</span>
    </div>
  );
}

/**
 * "Things that are true about you" — a responsive grid of emoji + text cards.
 * Each card reveals with a slight stagger so they waterfall in.
 */
export default function TruthCards({ truths }) {
  return (
    <section className="section" aria-labelledby="truths-title">
      <div className="container">
        <h2 className="section-title" id="truths-title">
          Things that are true about you
        </h2>
        <div className="truths-grid" role="list">
          {truths.map((t, i) => (
            <TruthCard
              key={i}
              emoji={t.emoji}
              text={t.text}
              delay={`${i * 0.07}s`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
