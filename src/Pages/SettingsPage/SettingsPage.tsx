import React from 'react';
import './SettingsPage.scss';

export default function SettingsPage(): JSX.Element {
  return (
    <div className="settings">
      <h2 className="settings__title">Настройки</h2>
      <div className="settings__wrapper">
        <div className="settings__item">Настройка языка заглушка</div>
        <div className="settings__item">Настройка стиля заглушка</div>
      </div>
    </div>
  );
}
