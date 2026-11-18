import { useScrollReveal } from '../hooks/useScrollReveal';

/**
 * "A note from a friend" — serif italic card with scroll-reveal.
 */
export default function NoteCard({ note }) {
  const ref = useScrollReveal();

  return (
    <section className="section" id="note" aria-label="A note from a friend">
      <div className="container">
        <div className="card note-card reveal" ref={ref}>
          <span className="note-decoration" aria-hidden="true">🌸</span>
          <p className="note-text">{note}</p>
          <p className="note-signature">
            — a friend who thinks you are wonderful
          </p>
        </div>
      </div>
    </section>
  );
}
