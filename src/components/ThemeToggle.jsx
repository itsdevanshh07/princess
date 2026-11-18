import { useState } from 'react';

const LS_KEY = 'pd-theme';

/**
 * Light / dark theme toggle.
 * Reads initial value from document.documentElement.dataset.theme
 * (already set by the inline anti-flash script in index.html).
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || 'light'
  );

  const toggle = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem(LS_KEY, next); } catch (_) {}
  };

  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label={
        theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
      }
      title={theme === 'light' ? 'Dark mode' : 'Light mode'}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}
