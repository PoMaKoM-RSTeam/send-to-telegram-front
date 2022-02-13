import React from 'react';
import { NavLink } from 'react-router-dom';
import PageUser from '../PageUser/PageUser';
import './Navigation.scss';

function Navigation() {
  return (
    <aside className="navigation">
      <div className="logo">RSClon</div>
      <PageUser />
      <nav>
        <ul className="navigation__list">
          <li className="navigation__item">
            <NavLink to="/console">Консоль </NavLink>
          </li>
          <li className="navigation__item">Каналы</li>
          <li className="navigation__item">
            <NavLink to="/content-plan">Контент-план </NavLink>
          </li>
          <li className="navigation__item">Статистика</li>
          <li className="navigation__item">
            <NavLink to="/moderation">Модерация </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="/settings">Настройки </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
export default Navigation;
