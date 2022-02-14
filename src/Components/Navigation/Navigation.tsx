import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PageUser from '../PageUser/PageUser';
import './Navigation.scss';

function Navigation() {
  const [active, setActive] = useState('');
  useEffect(() => {
    if (active) {
      document.body.classList.add('bodyRemoveScroll');
    } else {
      document.body.classList.remove('bodyRemoveScroll');
    }
  }, [active]);
  const onSetActiveMenuItem = (item: React.SetStateAction<string>) => {
    if (item !== active) {
      setActive(item);
    } else {
      setActive(''); // handle click on currently active item
    }
  };
  return (
    <aside className="navigation">
      <div className="loginNavigationLogo">
        <span>RS-Clone</span>
        <span>Bot</span>
      </div>
      <PageUser />
      <nav>
        <ul className="navigation__list">
          <li className="navigation__item">
            <NavLink
              to="/console"
              onClick={() => onSetActiveMenuItem('item1')}
              className={active === 'active' ? 'active' : ''}
            >
              Консоль{' '}
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="/canals">Каналы</NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="/content-plan">Контент-план </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="/stat">Статистика</NavLink>
          </li>
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
