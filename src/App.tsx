import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './scss/main.scss';
import { ReactNotifications } from 'react-notifications-component';
import Home from './pages/main';
import Error from './pages/error';
import Login from './pages/Login/login';
import Moderation from './pages/Moderation/Moderation';

function App() {
  return (
    <Router>
      <ReactNotifications />

      <nav>
        <Link to="/" />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login/*" element={<Login />} />
        <Route path="*" element={<Error />} />
        <Route path="/Moderation" element={<Moderation />} />
      </Routes>
    </Router>
  );
}

export default App;
