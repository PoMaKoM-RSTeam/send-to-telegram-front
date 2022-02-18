import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './SettingsPage.scss';
import DayNightToggle from 'react-day-and-night-toggle';

export default function SettingsPage(): JSX.Element {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
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
      <h2 className="settings__title">{t('personalArea.navigationMenuItem.set')}</h2>
      <div className="settings__wrapper">
        <div className="settings__item">
          <p>{t('personalArea.contentSet.lang')}</p>
          <button type="button" onClick={() => changeLanguage('en')}>
            EN
          </button>
          <button type="button" onClick={() => changeLanguage('ru')}>
            RU
          </button>
        </div>
        <div className="settings__item">
          <p>{t('personalArea.contentSet.them')}</p>
          <DayNightToggle size={30} onChange={() => handleChangeTheme()} checked={isDarkMode} />
        </div>
      </div>
    </div>
  );
}
