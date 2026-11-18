import { memo } from 'react';

/**
 * Pure-CSS floating particles — leaves, petals, butterflies.
 * All animation is CSS-driven (zero JS RAF loops).
 * Paused / invisible under prefers-reduced-motion via CSS.
 */
const PARTICLES = [
  { emoji: '🍃', left: '8%',  dur: '18s', delay: '0s',    size: '1.4rem' },
  { emoji: '🌸', left: '22%', dur: '23s', delay: '3.5s',  size: '1.2rem' },
  { emoji: '🦋', left: '38%', dur: '15s', delay: '7s',    size: '1.6rem' },
  { emoji: '🌿', left: '55%', dur: '21s', delay: '1s',    size: '1.3rem' },
  { emoji: '🌸', left: '72%', dur: '26s', delay: '11s',   size: '1rem'   },
  { emoji: '🍃', left: '88%', dur: '17s', delay: '5s',    size: '1.5rem' },
  { emoji: '🦋', left: '14%', dur: '24s', delay: '9s',    size: '1.1rem' },
  { emoji: '🌿', left: '62%', dur: '19s', delay: '14.5s', size: '1.4rem' },
];

export default memo(function AnimatedBackground() {
  return (
    <div className="bg-particles" aria-hidden="true" role="presentation">
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="bg-particle"
          style={{
            left: p.left,
            fontSize: p.size,
            animationDuration: p.dur,
            animationDelay: p.delay,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
});
