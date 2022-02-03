import React from 'react';
import './Main.scss';
import { Route, Routes, NavLink } from 'react-router-dom';
import ConsoleBot from '../../Components/ConsoleBot/ConsoleBot';
import PageUser from '../../Components/PageUser/PageUser';
import SettingsPage from '../SettingsPage/SettingsPage';

function Main() {
  return (
    <div className="page-frame">
      <aside className="navigation">
        <div className="logo">RSClon</div>
        <PageUser />
        <nav>
          <ul className="navigation__list">
            <li className="navigation__item">Консоль</li>
            <li className="navigation__item">Контент-план</li>
            <li className="navigation__item">Каналы</li>
            <li className="navigation__item">Аккаунты</li>
            <li className="navigation__item">Биллинг</li>
            <li className="navigation__item">
              <NavLink to="/settings">Настройки </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <section className="info-area">
        <Routes>
          <Route index element={<ConsoleBot />} />
          <Route path="/console" element={<ConsoleBot />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </section>
    </div>
  );
}

export default Main;