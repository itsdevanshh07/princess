import { useState, useRef } from 'react';

/**
 * Ambient sound toggle (off by default).
 *
 * Uses the Web Audio API to generate a soft binaural-ish drone:
 *   • 432 Hz sine wave (A natural)
 *   • 436 Hz sine wave (slight beat)
 * Both at gain ≈ 0.02 — barely audible, calming.
 *
 * AudioContext is created on the FIRST user click (required by iOS/Safari).
 * No audio files — zero extra bundle weight.
 */
export default function SoundToggle() {
  const [isOn, setIsOn] = useState(false);
  const ctxRef  = useRef(null);
  const gainRef = useRef(null);

  const startAudio = () => {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return; // browser doesn't support Web Audio API

    const ctx = new AC();
    ctxRef.current = ctx;

    // Master gain — fade in slowly so it doesn't startle
    const master = ctx.createGain();
    master.gain.setValueAtTime(0, ctx.currentTime);
    master.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 2);
    master.connect(ctx.destination);
    gainRef.current = master;

    // Two oscillators for a gentle beating / warmth effect
    [432, 436].forEach(freq => {
      const osc     = ctx.createOscillator();
      const oscGain = ctx.createGain();
      osc.type            = 'sine';
      osc.frequency.value = freq;
      oscGain.gain.value  = 0.5;
      osc.connect(oscGain);
      oscGain.connect(master);
      osc.start();
    });
  };

  const stopAudio = () => {
    if (!ctxRef.current || !gainRef.current) return;
    const ctx  = ctxRef.current;
    const gain = gainRef.current;

    // Fade out gracefully
    gain.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 1.2);
    setTimeout(() => {
      ctx.close().catch(() => {});
      ctxRef.current  = null;
      gainRef.current = null;
    }, 1400);
  };

  const toggle = () => {
    if (isOn) {
      stopAudio();
    } else {
      startAudio();
    }
    setIsOn(v => !v);
  };

  return (
    <button
      className={`sound-toggle ${isOn ? 'active' : ''}`}
      onClick={toggle}
      aria-label={isOn ? 'Turn off ambient sound' : 'Turn on soft ambient sound (currently off)'}
      title={isOn ? 'Sound on — click to turn off' : 'Sound off — click to turn on'}
    >
      {isOn ? '🔊' : '🔇'}
    </button>
  );
}
