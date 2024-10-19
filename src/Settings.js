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

  return (
    <div className="settings-container">
      <h2>Einstellungen</h2>
      <p>Hier können Sie Ihre Einstellungen konfigurieren.</p>
      <div>
        <label>
          <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
          Dark Mode
        </label>
      </div>
    </div>
  );
};

export default Settings;
