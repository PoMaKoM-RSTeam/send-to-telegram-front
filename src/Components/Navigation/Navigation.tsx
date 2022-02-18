import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageUser from '../PageUser/PageUser';
import './Navigation.scss';

function Navigation() {
  const { t } = useTranslation();
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
      setActive('');
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
              {t('personalArea.navigationMenuItem.console')}{' '}
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="/canals">{t('personalArea.navigationMenuItem.channel')}</NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="/content-plan">{t('personalArea.navigationMenuItem.content')}</NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="/statistics">{t('personalArea.navigationMenuItem.stat')}</NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="/moderation">{t('personalArea.navigationMenuItem.mode')}</NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="/settings">{t('personalArea.navigationMenuItem.set')}</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
export default Navigation;
