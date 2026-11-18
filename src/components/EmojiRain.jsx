import { useEffect, useRef } from 'react';

const EMOJIS = ['🌸', '🌼', '🐝', '🦋', '🐰', '🐾', '🍃', '🌿', '✨'];

/**
 * Spawns emoji as absolutely-positioned DOM elements that fall under CSS
 * animation, then self-remove. This keeps React's tree clean.
 *
 * Skips all animation if prefers-reduced-motion is set.
 */
function spawnEmoji(count) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const el   = document.createElement('span');
      el.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
      const size = (Math.random() * 16 + 20).toFixed(0);
      const left = (Math.random() * 88 + 4).toFixed(1);
      const dur  = (Math.random() * 1.5 + 2.2).toFixed(2);

      el.setAttribute('aria-hidden', 'true');
      el.style.cssText = [
        'position:fixed',
        'top:-60px',
        `left:${left}vw`,
        `font-size:${size}px`,
        'pointer-events:none',
        'z-index:9999',
        'line-height:1',
        'user-select:none',
        `animation:emoji-fall ${dur}s ease-in forwards`,
      ].join(';');

      document.body.appendChild(el);
      el.addEventListener('animationend', () => el.remove(), { once: true });
    }, i * 100);
  }
}

/**
 * EmojiRain — receives a numeric `trigger` prop.
 * Whenever `trigger` increments, a shower of 22 emoji is spawned.
 * On initial mount, 4 emoji drop gently after a 1 s delay.
 */
export default function EmojiRain({ trigger }) {
  const prevRef = useRef(-1);

  useEffect(() => {
    if (prevRef.current === -1) {
      // Welcome drop on page load
      const t = setTimeout(() => spawnEmoji(4), 1200);
      prevRef.current = trigger;
      return () => clearTimeout(t);
    }

    if (trigger > prevRef.current) {
      spawnEmoji(22);
    }
    prevRef.current = trigger;
  }, [trigger]);

  // Renders nothing — effects happen directly in the DOM
  return null;
}
