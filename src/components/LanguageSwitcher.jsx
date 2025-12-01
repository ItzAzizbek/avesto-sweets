import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';
import './LanguageSwitcher.css';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'en', label: 'EN', fullName: 'English' },
    { code: 'ru', label: 'RU', fullName: 'Русский' },
    { code: 'uz', label: 'UZ', fullName: "O'zbek" }
  ];

  return (
    <div className="language-switcher">
      <Globe className="switcher-icon" size={20} />
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="language-select"
        aria-label="Select language"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label} - {lang.fullName}
          </option>
        ))}
      </select>
    </div>
  );
}
