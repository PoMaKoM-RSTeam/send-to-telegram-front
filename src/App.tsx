import './App.scss';

import * as React from 'react';

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
        <button className="loginBtn effectLogin" type="submit">
          Login with telegram
        </button>
      </div>
    </div>
  );
}

export default App;
