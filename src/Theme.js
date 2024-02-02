import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  // Load the theme preference from local storage when the component mounts
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    }
  }, []);

  // Toggle dark mode and save the preference in local storage
  const toggleDarkMode = () => {
    const newTheme = darkMode ? 'light' : 'dark';
    setDarkMode(newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  const themeStyles = {
    light: {
      backgroundColor: '#ffffff',
      color: '#333333',
    },
    dark: {
      backgroundColor: '#333333',
      color: '#ffffff',
    },
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, themeStyles }}>
      {children}
    </ThemeContext.Provider>
  );
}
