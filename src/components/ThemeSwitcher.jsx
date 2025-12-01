import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import './ThemeSwitcher.css';

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  const getIcon = () => {
    return theme === 'light' ? <Sun size={20} /> : <Moon size={20} />;
  };

  const getLabel = () => {
    return theme === 'light' ? 'Light' : 'Dark';
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-switcher"
      aria-label={`Current theme: ${getLabel()}. Click to toggle theme.`}
      title={`Theme: ${getLabel()}`}
    >
      {getIcon()}
      <span className="theme-label">{getLabel()}</span>
    </button>
  );
}
