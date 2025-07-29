import { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeInitializer = () => {
  const { theme } = useTheme();

  useEffect(() => {
    // Force remove any system preference classes
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return null;
};

export default ThemeInitializer;