import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './scss/main.scss';
import Home from './pages/main';
import Error from './pages/error';
import Login from './pages/Login/login';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/" />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
