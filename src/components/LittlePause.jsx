import { useState, useEffect, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

/**
 * "Little Pause" section:
 * Three purely calm and gentle activities:
 *  1. Gentle Breathing circle (4s in / 4s out, start/stop)
 *  2. Gratitude prompt (gentle rotating prompt from content.json)
 *  3. Soft stretch reminder (calm text)
 */
export default function LittlePause({ gratitudePrompts, stretchText }) {
  const [activeTab, setActiveTab] = useState('breathe');
  const [isBreathing, setIsBreathing] = useState(false);
  const [breathPhase, setBreathPhase] = useState('in'); // 'in' or 'out'
  const [promptIndex, setPromptIndex] = useState(0);

  const timerRef = useRef(null);
  const revealRef = useScrollReveal();

  // Breathing loop: 4s inhale, 4s exhale
  useEffect(() => {
    if (!isBreathing) {
      if (timerRef.current) clearInterval(timerRef.current);
      setBreathPhase('in');
      return;
    }

    setBreathPhase('in');
    timerRef.current = setInterval(() => {
      setBreathPhase(prev => (prev === 'in' ? 'out' : 'in'));
    }, 4000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isBreathing]);

  const handleNextPrompt = () => {
    setPromptIndex(prev => (prev + 1) % gratitudePrompts.length);
  };

  return (
    <section className="section" aria-labelledby="pause-title">
      <div className="container">
        <div className="reveal" ref={revealRef}>
          <h2 className="section-title" id="pause-title">
            🌿 Take a little pause
          </h2>

          {/* Activity tabs */}
          <div className="little-pause-tabs" role="tablist" aria-label="Calm pause activities">
            <button
              className={`tab-btn ${activeTab === 'breathe' ? 'active' : ''}`}
              role="tab"
              aria-selected={activeTab === 'breathe'}
              aria-controls="panel-breathe"
              id="tab-breathe"
              onClick={() => setActiveTab('breathe')}
            >
              🫧 Breathe
            </button>
            <button
              className={`tab-btn ${activeTab === 'gratitude' ? 'active' : ''}`}
              role="tab"
              aria-selected={activeTab === 'gratitude'}
              aria-controls="panel-gratitude"
              id="tab-gratitude"
              onClick={() => setActiveTab('gratitude')}
            >
              🌱 A gentle thought
            </button>
            <button
              className={`tab-btn ${activeTab === 'stretch' ? 'active' : ''}`}
              role="tab"
              aria-selected={activeTab === 'stretch'}
              aria-controls="panel-stretch"
              id="tab-stretch"
              onClick={() => setActiveTab('stretch')}
            >
              🌾 Relax & Stretch
            </button>
          </div>

          <div className="card" style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
            {/* Panel 1: Breathing */}
            <div
              id="panel-breathe"
              role="tabpanel"
              aria-labelledby="tab-breathe"
              hidden={activeTab !== 'breathe'}
              className="tab-panel"
            >
              <div className="breathing-wrapper">
                <div
                  className={`breathing-circle ${isBreathing ? (breathPhase === 'in' ? 'phase-in' : 'phase-out') : ''}`}
                  aria-hidden="true"
                />
                <p className="breathing-label" role="status" aria-live="polite">
                  {isBreathing
                    ? breathPhase === 'in'
                      ? 'Inhale gently... 🌸'
                      : 'Exhale softly... 🍃'
                    : 'A slow rhythm, whenever you like.'}
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => setIsBreathing(prev => !prev)}
                  aria-label={isBreathing ? 'Stop breathing exercise' : 'Start 4 second breathing rhythm'}
                >
                  {isBreathing ? 'Pause rhythm' : 'Begin 4s rhythm'}
                </button>
              </div>
            </div>

            {/* Panel 2: Gratitude prompt */}
            <div
              id="panel-gratitude"
              role="tabpanel"
              aria-labelledby="tab-gratitude"
              hidden={activeTab !== 'gratitude'}
              className="tab-panel"
            >
              <div className="gratitude-section">
                <span style={{ fontSize: '2.5rem' }} aria-hidden="true">
                  🌻
                </span>
                <p className="gratitude-prompt" role="status" aria-live="polite">
                  "{gratitudePrompts[promptIndex]}"
                </p>
                <div className="gratitude-actions">
                  <button className="btn btn-secondary" onClick={handleNextPrompt}>
                    ✨ Next gentle prompt
                  </button>
                </div>
              </div>
            </div>

            {/* Panel 3: Stretch reminder */}
            <div
              id="panel-stretch"
              role="tabpanel"
              aria-labelledby="tab-stretch"
              hidden={activeTab !== 'stretch'}
              className="tab-panel"
            >
              <div className="stretch-section">
                <span style={{ fontSize: '2.5rem' }} aria-hidden="true">
                  🕊️
                </span>
                <p className="stretch-text">{stretchText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
