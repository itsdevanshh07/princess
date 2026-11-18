/**
 * Hero section — full-viewport, centred.
 * Name is passed from App (read from URL hash or content.json default).
 * onEmojiRain increments the trigger that fires EmojiRain.
 */
export default function Hero({ name, onEmojiRain }) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-content">
        <span className="hero-crown" aria-hidden="true">👑</span>

        <h1 className="hero-title" id="hero-title">
          Happy Princess Day,{' '}
          <span className="hero-name">{name}</span>
        </h1>

        <p className="hero-subtitle">
          A little space made just for you ✨
        </p>

        <div className="hero-actions">
          <button
            className="btn btn-primary"
            onClick={onEmojiRain}
            aria-label="Shower of petals — click to celebrate"
          >
            🌸 Make it rain petals
          </button>

          <a href="#note" className="btn btn-ghost">
            Continue ↓
          </a>
        </div>
      </div>
    </section>
  );
}
