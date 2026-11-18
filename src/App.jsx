import { useState, useEffect } from 'react';
import content from '../data/content.json';

import AnimatedBackground from './components/AnimatedBackground';
import ThemeToggle from './components/ThemeToggle';
import SoundToggle from './components/SoundToggle';
import EmojiRain from './components/EmojiRain';
import Hero from './components/Hero';
import NoteCard from './components/NoteCard';
import TruthCards from './components/TruthCards';
import ComplimentGenerator from './components/ComplimentGenerator';
import KindnessWall from './components/KindnessWall';
import TreatSection from './components/TreatSection';
import LittlePause from './components/LittlePause';

function App() {
  /* ── Name from URL hash (e.g. #Osheen), falls back to content.json default ── */
  const [name, setName] = useState(() => {
    const hash = window.location.hash.slice(1);
    return hash ? decodeURIComponent(hash) : content.name;
  });

  /* ── Emoji rain trigger (incrementing counter) ── */
  const [rainTrigger, setRainTrigger] = useState(0);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.slice(1);
      setName(hash ? decodeURIComponent(hash) : content.name);
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <div className="app">
      {/* Skip-to-content link for keyboard users */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Purely decorative — aria-hidden */}
      <AnimatedBackground />

      {/* Fixed controls */}
      <ThemeToggle />
      <SoundToggle />

      {/* Rain overlay — renders nothing visible, injects DOM elements */}
      <EmojiRain trigger={rainTrigger} />

      <main id="main-content">
        <Hero
          name={name}
          onEmojiRain={() => setRainTrigger(c => c + 1)}
        />

        <NoteCard note={content.note} />

        <TruthCards truths={content.truths} />

        <ComplimentGenerator compliments={content.compliments} />

        <KindnessWall wishes={content.wishes} />

        <TreatSection />

        <LittlePause
          gratitudePrompts={content.gratitudePrompts}
          stretchText={content.stretchText}
        />
      </main>

      <footer className="site-footer" role="contentinfo">
        <p>Made with 🌸 just for you</p>
      </footer>
    </div>
  );
}

export default App;
