import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext({
  darkMode: false,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  // При старте читаем из localStorage
  useEffect(() => {
    const saved = localStorage.getItem('darkMode') === 'true';
    setDarkMode(saved);
    document.documentElement.classList.toggle('dark', saved);
  }, []);

  const toggleTheme = () => {
    const next = !darkMode;
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('darkMode', String(next));
    setDarkMode(next);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
