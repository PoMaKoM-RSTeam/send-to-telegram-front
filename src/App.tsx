import './App.scss';
import * as React from 'react';
import TelegramLoginButton, { TelegramUser } from 'telegram-login-button';

function componentDidMount() {
  const script = document.createElement('script');

  script.src = 'https://telegram.org/js/telegram-widget.js?15';
  script.async = true;

  document.body.appendChild(script);
}
componentDidMount();
function App() {
  return (
    <div className="wrapper">
      <div className="header">
        <div>
          <b>RS</b>
          -Clone
          <span>Bot</span>
        </div>
      </div>
      <div className="login">
        <TelegramLoginButton botName="RSCloneBot" dataOnauth={(user: TelegramUser) => console.log(user)} />
      </div>
    </div>
  );
}

export default App;
