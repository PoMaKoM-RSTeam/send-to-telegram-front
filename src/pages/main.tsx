import React from 'react';
import '../scss/main.scss';
import { useNavigate } from 'react-router-dom';
import TelegramLoginButton, { TelegramUser } from 'telegram-login-button';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="wrapper">
      <div className="header">
        <div className="logo">
          <span className="logo-1">RS</span>
          <span className="logo-2"> -Clone</span>
          <span className="logo-3">Bot</span>
        </div>
        <div className="login">
          <button className="loginBtn effectLogin" type="submit">
            <TelegramLoginButton botName="RSCloneDevBot" dataOnauth={(user: TelegramUser) => console.log(user)} />
          </button>
          <button
            className="loginBtn effectBtn"
            type="submit"
            onClick={() => {
              navigate('/Login');
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
export default Home;
