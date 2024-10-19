import React, { useState, useEffect } from 'react';
import './Settings.css';  // Dein CSS importieren

const Settings = () => {
  // Theme aus dem Local Storage lesen, falls vorhanden
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    // Setze den Theme-Klassen-Namen auf dem Body-Element
    document.body.className = theme;

    // Speichere das Theme im Local Storage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Funktion zum Umschalten des Themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  const [language, setLanguage] = useState('en');

  // Beispiel: Übersetzungsobjekt
  const translations = {
    en: {
      settings: 'Settings',
      darkMode: 'Dark Mode',
      set: 'Here you can configure your settings.',
      fetchRepoData: 'Fetch Repository Data',
    },
    de: {
      settings: 'Einstellungen',
      darkMode: 'Dunkler Modus',
      set: 'Hier können Sie Ihre Einstellungen konfigurieren.',
      fetchRepoData: 'Repository-Daten abrufen',
    },
  };
  
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };
  

  return (
    <div className="settings-container">
      <h2>{translations[language].settings}</h2>
      <p>{translations[language].set}</p>
      <label>{translations[language].darkMode}</label>
      <div>
        <label>
          <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
          Dark Mode
        </label>
      </div>
        <select value={language} onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="de">Deutsch</option>
        </select>
    </div>
  );
};

export default Settings;
