import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

/**
 * "Treat for you" section:
 * An illustrated vegan cake with decorative flowers and a candle.
 * Tap or click the candle to "blow" it out.
 */
export default function TreatSection() {
  const [blown, setBlown] = useState(false);
  const revealRef = useScrollReveal();

  const handleBlow = () => {
    setBlown(true);
  };

  const handleRelight = () => {
    setBlown(false);
  };

  return (
    <section className="section" aria-labelledby="treat-title">
      <div className="container">
        <div className="reveal treat-wrapper" ref={revealRef}>
          <h2 className="section-title" id="treat-title">
            🎂 A little vegan treat for you
          </h2>
          <p className="treat-hint">
            {blown
              ? '✨ May all your gentlest wishes come true!'
              : 'Tap the candle flame to make a quiet wish 🕯️'}
          </p>

          <div className="cake-container">
            <svg
              className={`cake-svg ${blown ? 'blown' : ''}`}
              viewBox="0 0 300 280"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Illustration of a vegan flower cake with a candle"
            >
              {/* Stand / Plate */}
              <ellipse cx="150" cy="245" rx="115" ry="16" fill="var(--pink-200)" />
              <ellipse cx="150" cy="240" rx="105" ry="13" fill="var(--pink-100)" />
              <rect x="140" y="244" width="20" height="18" rx="4" fill="var(--pink-300)" />
              <ellipse cx="150" cy="262" rx="42" ry="7" fill="var(--pink-200)" />

              {/* Bottom Cake Layer (Berry / Sponge) */}
              <path
                d="M 65 180 C 65 170, 235 170, 235 180 L 235 215 C 235 230, 65 230, 65 215 Z"
                fill="#f7d4c1"
              />
              <path
                d="M 65 200 C 100 212, 200 212, 235 200 L 235 215 C 235 230, 65 230, 65 215 Z"
                fill="#ecb193"
              />

              {/* Frosting drips / layer divider */}
              <path
                d="M 65 180 C 80 190, 95 175, 110 185 C 130 175, 150 190, 170 178 C 190 188, 210 176, 235 182 C 235 172, 65 172, 65 180 Z"
                fill="var(--pink-300)"
              />

              {/* Top Cake Layer */}
              <path
                d="M 85 130 C 85 120, 215 120, 215 130 L 215 175 C 215 190, 85 190, 85 175 Z"
                fill="#fdf0e6"
              />
              <path
                d="M 85 130 C 85 120, 215 120, 215 130 C 215 140, 85 140, 85 130 Z"
                fill="#fff9f5"
              />

              {/* Cream frosting trim */}
              <circle cx="95" cy="132" r="7" fill="var(--pink-100)" />
              <circle cx="112" cy="134" r="7" fill="var(--pink-100)" />
              <circle cx="130" cy="135" r="7" fill="var(--pink-100)" />
              <circle cx="150" cy="136" r="7" fill="var(--pink-100)" />
              <circle cx="170" cy="135" r="7" fill="var(--pink-100)" />
              <circle cx="188" cy="134" r="7" fill="var(--pink-100)" />
              <circle cx="205" cy="132" r="7" fill="var(--pink-100)" />

              {/* Little floral accents on cake (vegan edible flowers) */}
              {/* Flower 1 */}
              <g transform="translate(100, 155) scale(0.7)">
                <circle cx="0" cy="-6" r="5" fill="#f97aaa" />
                <circle cx="6" cy="0" r="5" fill="#f97aaa" />
                <circle cx="0" cy="6" r="5" fill="#f97aaa" />
                <circle cx="-6" cy="0" r="5" fill="#f97aaa" />
                <circle cx="0" cy="0" r="4" fill="#ffd166" />
              </g>
              {/* Leaves */}
              <path d="M 112 165 C 120 162, 126 166, 124 172 C 118 172, 114 168, 112 165 Z" fill="#93d085" />
              <path d="M 90 168 C 84 165, 80 170, 82 175 C 87 175, 90 171, 90 168 Z" fill="#93d085" />

              {/* Flower 2 */}
              <g transform="translate(195, 160) scale(0.65)">
                <circle cx="0" cy="-6" r="5" fill="#ff9bb9" />
                <circle cx="6" cy="0" r="5" fill="#ff9bb9" />
                <circle cx="0" cy="6" r="5" fill="#ff9bb9" />
                <circle cx="-6" cy="0" r="5" fill="#ff9bb9" />
                <circle cx="0" cy="0" r="4" fill="#ffd166" />
              </g>
              <path d="M 205 168 C 212 166, 216 171, 214 176 C 209 176, 206 172, 205 168 Z" fill="#93d085" />

              {/* Strawberry / berry accent */}
              <ellipse cx="150" cy="148" rx="8" ry="9" fill="#e8559a" />
              <circle cx="150" cy="142" r="2" fill="#68bc5a" />

              {/* Candle */}
              <rect x="146" y="80" width="8" height="46" rx="3" fill="#ffe0ea" stroke="var(--pink-300)" strokeWidth="1" />
              {/* Stripes on candle */}
              <line x1="147" y1="92" x2="153" y2="88" stroke="#f97aaa" strokeWidth="2" strokeLinecap="round" />
              <line x1="147" y1="106" x2="153" y2="102" stroke="#f97aaa" strokeWidth="2" strokeLinecap="round" />
              <line x1="147" y1="118" x2="153" y2="114" stroke="#f97aaa" strokeWidth="2" strokeLinecap="round" />
              {/* Wick */}
              <line x1="150" y1="80" x2="150" y2="72" stroke="#4a3250" strokeWidth="2" strokeLinecap="round" />

              {/* Flame (animated / blown away) */}
              <g className="flame">
                <ellipse cx="150" cy="60" rx="10" ry="14" fill="#ffb703" opacity="0.4" />
                <path
                  d="M 150 48 C 158 58, 156 68, 150 71 C 144 68, 142 58, 150 48 Z"
                  fill="#fb8500"
                />
                <ellipse cx="150" cy="64" rx="4" ry="6" fill="#ffea00" />
              </g>

              {/* Soft Smoke Puff when candle blown */}
              <g className="smoke">
                <path
                  d="M 150 68 C 146 58, 154 50, 149 40 C 145 32, 152 25, 148 18"
                  stroke="var(--text-muted)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="4 3"
                  fill="none"
                />
                <circle cx="147" cy="16" r="3" fill="var(--text-muted)" opacity="0.6" />
              </g>
            </svg>

            {/* Tap target over the candle */}
            <button
              className="blow-btn"
              onClick={blown ? handleRelight : handleBlow}
              aria-label={blown ? 'Relight the candle' : 'Blow out the candle to make a wish'}
              title={blown ? 'Click to relight' : 'Click to blow out the candle'}
            />
          </div>

          <div className="treat-message" role="status" aria-live="polite">
            {blown && (
              <div>
                <p style={{ marginBottom: '1rem' }}>
                  A sweet wish made just for you. Take all the time you need. 🌸
                </p>
                <button className="btn btn-ghost" onClick={handleRelight}>
                  🕯️ Relight candle
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
