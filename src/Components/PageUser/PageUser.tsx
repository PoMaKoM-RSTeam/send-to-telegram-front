import React from 'react';
import { NavLink } from 'react-router-dom';
import './PageUser.scss';

export default function PageUser(): JSX.Element {
  return (
    <div className="user">
      <div className="user__counter">0</div>
      <div className="user__wrapper">
        <div className="user__logo">PO</div>
        <div className="user__info">
          <div className="user__name">Роман</div>
          <div className="user__exit">
            <NavLink to="/login">Выйти</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
