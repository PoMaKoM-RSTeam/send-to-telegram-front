import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReactNotifications } from 'react-notifications-component';
import Login from './pages/Login/Login';
import Error from './pages/error';
import Main from './pages/Main/Main';
import Moderation from './pages/Moderation/Moderation';

function App() {
  return (
    <Router>
      <ReactNotifications />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Main />} />
        <Route path="*" element={<Error />} />
        <Route path="/Moderation" element={<Moderation />} />
      </Routes>
    </Router>
  );
}

export default App;
