import React from 'react';
import './Login.scss';
import { Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import { useNavigate } from 'react-router-dom';
import TelegramLoginButton, { TelegramUser } from 'telegram-login-button';

function Login(): JSX.Element {
  const navigate = useNavigate();
  const verificationUser = (user: TelegramUser) => {
    const validUser = true;
    console.log(user);
    if (validUser) {
      navigate('/');
    } else {
      Store.addNotification({
        title: 'LOGIN ERROR',
        message: 'An authorization error has occurred. Try again',
        type: 'danger',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });
      console.log('err');
    }
  };
  return (
    <div className="wrapper">
      <div className="header">
        <div className="logo">
          <span className="logo-1">RS</span>
          <span className="logo-2"> -Clone</span>
          <span className="logo-3">Bot</span>
        </div>
        <div className="login">
          <TelegramLoginButton
            botName="RSCloneDevBot"
            dataOnauth={(user: TelegramUser) => {
              verificationUser(user);
              console.log(user);
            }}
          />
          <button
            className="loginBtn effectBtn"
            type="submit"
            onClick={() => {
              navigate('/');
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
export default Login;
