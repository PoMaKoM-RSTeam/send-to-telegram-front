import React, { useState, useEffect} from 'react';
import './SettingsPage.scss';
import DayNightToggle from 'react-day-and-night-toggle';


export default function SettingsPage(): JSX.Element {
const [isDarkMode, setIsLightMode] = useState(localStorage.getItem('data-theme') === 'dark');
useEffect(() => {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    const newColorScheme = e.matches ? 'dark' : 'light';
    setIsLightMode(newColorScheme === 'light');
    localStorage.setItem('data-theme', newColorScheme);
    document.body.setAttribute('data-theme', localStorage.getItem('data-theme') || '{}');
  });

  if (!isDarkMode) {
    localStorage.setItem('data-theme', 'light');
    document.body.setAttribute('data-theme', 'light');
  } else {
    localStorage.setItem('data-theme', 'dark');
    document.body.setAttribute('data-theme', 'dark');
  }
}, [isDarkMode]);

const handleChangeTheme = () => {
  setIsLightMode(!isDarkMode);
  if (!isDarkMode) {
    localStorage.setItem('data-theme', 'dark');
    document.body.setAttribute('data-theme', 'dark');
  } else {
    localStorage.setItem('data-theme', 'light');
    document.body.setAttribute('data-theme', 'light');
  }
};

  return (
    <div className="settings">
      <h2 className="settings__title">Настройки</h2>
      <div className="settings__wrapper">
        <div className="settings__item">Настройка языка заглушка</div>
        <div className="settings__item">
          <p>Cмена темы:</p>
          <DayNightToggle size={30} onChange={() => handleChangeTheme()} checked={isDarkMode} />
        </div>
      </div>
    </div>
  );
}
