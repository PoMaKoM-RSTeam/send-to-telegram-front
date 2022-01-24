import React from 'react';
import './login.scss';

function Login() {
  return (
    <div className="login">
      <aside className="navigation">
        <div className="logo">RSClon</div>
        <div className="user">user</div>
        <nav>
          <ul className="navigation__list">
            <li className="navigation__item">Консоль</li>
            <li className="navigation__item">Контент-план</li>
            <li className="navigation__item">Каналы</li>
            <li className="navigation__item">Аккаунты</li>
            <li className="navigation__item">Биллинг</li>
            <li className="navigation__item">Настройки</li>
          </ul>
        </nav>
      </aside>
      <section className="info-area">bfd</section>
    </div>
  );
}

export default Login;
