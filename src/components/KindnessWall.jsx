import { useState, useCallback } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

/**
 * Kindness Wall — a simple sliding carousel of 10 animal/plant themed wishes.
 *
 * Accessibility:
 *   - role="region" + aria-label on wrapper
 *   - Arrow-key navigation
 *   - Each slide: role="group" + aria-label "Wish N of N"
 *   - Hidden slides: aria-hidden="true"
 *   - Dot buttons: role="tab" + aria-selected
 *   - Prev/Next: aria-label
 */
export default function KindnessWall({ wishes }) {
  const [current, setCurrent] = useState(0);
  const revealRef = useScrollReveal();

  const goTo = useCallback(
    idx => setCurrent(Math.max(0, Math.min(wishes.length - 1, idx))),
    [wishes.length]
  );

  const handleKeyDown = e => {
    if (e.key === 'ArrowLeft')  { e.preventDefault(); goTo(current - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); goTo(current + 1); }
  };

  return (
    <section className="section" aria-labelledby="kindness-title">
      <div className="container">
        <div className="reveal" ref={revealRef}>
          <h2 className="section-title" id="kindness-title">
            🌼 A little wall of kindness
          </h2>

          <div
            className="card carousel-wrapper"
            onKeyDown={handleKeyDown}
            role="region"
            aria-label="Kindness wall — 10 wishes for you"
            aria-roledescription="carousel"
          >
            {/* Sliding track */}
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {wishes.map((wish, i) => (
                <div
                  key={i}
                  className="carousel-slide"
                  role="group"
                  aria-label={`Wish ${i + 1} of ${wishes.length}`}
                  aria-hidden={i !== current}
                >
                  <div className="carousel-card">
                    <span className="carousel-emoji" aria-hidden="true">
                      {wish.emoji}
                    </span>
                    <p className="carousel-text">{wish.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Controls */}
            <div className="carousel-controls">
              <button
                className="carousel-btn"
                onClick={() => goTo(current - 1)}
                disabled={current === 0}
                aria-label="Previous wish"
              >
                ←
              </button>

              <div className="carousel-dots" role="tablist" aria-label="Wish navigation">
                {wishes.map((_, i) => (
                  <button
                    key={i}
                    className={`carousel-dot ${i === current ? 'active' : ''}`}
                    role="tab"
                    aria-selected={i === current}
                    aria-label={`Go to wish ${i + 1}`}
                    onClick={() => goTo(i)}
                  />
                ))}
              </div>

              <button
                className="carousel-btn"
                onClick={() => goTo(current + 1)}
                disabled={current === wishes.length - 1}
                aria-label="Next wish"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
