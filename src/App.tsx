import React from 'react';
import './scss/style.scss';
import TelegramLoginButton, { TelegramUser } from 'telegram-login-button';

function App() {
  return (
    <div className="wrapper">
      <div className="header">
        <div className="logo">
          <span className="logo-1">RS</span>
          <span className="logo-2"> -Clone</span>
          <span className="logo-3">Bot</span>
        </div>
      </div>
      <div className="login">
        <button className="loginBtn effectLogin" type="submit">
          <TelegramLoginButton botName="RSCloneDevBot" dataOnauth={(user: TelegramUser) => console.log(user)} />
        </button>
      </div>
    </div>
  );
}

export default App;
