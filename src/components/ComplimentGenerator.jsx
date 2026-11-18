import { useState, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

/**
 * Compliment generator.
 * Picks a random compliment from the pool, never repeating back-to-back.
 * Uses an aria-live region so screen readers announce the new compliment.
 * Text fades out/in between compliments for a gentle micro-interaction.
 */
export default function ComplimentGenerator({ compliments }) {
  const [current, setCurrent]   = useState(null);
  const [fading,  setFading]    = useState(false);
  const lastIdxRef = useRef(-1);
  const revealRef  = useScrollReveal();

  const pickNext = () => {
    let idx;
    do {
      idx = Math.floor(Math.random() * compliments.length);
    } while (idx === lastIdxRef.current && compliments.length > 1);
    lastIdxRef.current = idx;
    return compliments[idx];
  };

  const handleClick = () => {
    if (fading) return;

    if (current !== null) {
      // Fade out → swap → fade in
      setFading(true);
      setTimeout(() => {
        setCurrent(pickNext());
        setFading(false);
      }, 320);
    } else {
      setCurrent(pickNext());
    }
  };

  return (
    <section className="section" aria-labelledby="compliment-title">
      <div className="container">
        <div className="reveal" ref={revealRef}>
          <h2 className="section-title" id="compliment-title">
            💌 A little something for you
          </h2>

          <div className="compliment-wrapper">
            {/* aria-live announces new content to screen readers */}
            <div
              className={`compliment-display${fading ? ' fading' : ''}`}
              role="status"
              aria-live="polite"
              aria-atomic="true"
            >
              {current ?? (
                <span className="compliment-hint" style={{ fontStyle: 'normal' }}>
                  Press the button to hear something nice 🌼
                </span>
              )}
            </div>

            <button
              className="btn btn-primary"
              onClick={handleClick}
              aria-label={current ? 'Get another compliment' : 'Get a compliment'}
            >
              {current ? '✨ Another one' : '🌸 For me?'}
            </button>

            {current && (
              <p className="compliment-hint">
                Every single one of these is true.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
