import { useEffect, useState } from 'react';

/**
 * Light/dark theme hook.
 * The initial theme is decided by the inline script in index.html (saved
 * preference, falling back to the OS setting) before React loads, so there
 * is no flash of the wrong theme. This hook just reads that value, applies
 * changes to <html data-theme="...">, and persists the choice.
 */
export default function useTheme() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'light');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return { theme, toggleTheme };
}
