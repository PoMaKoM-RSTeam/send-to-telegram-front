import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ReactNotifications } from 'react-notifications-component';
import Login from './pages/Login/Login';
import Error from './pages/error';
import Main from './pages/Main/Main';
import Moderation from './pages/Moderation/Moderation';

interface IRequireAuth {
  children: JSX.Element;
  redirectTo: string;
}

function RequireAuth({ children, redirectTo }: IRequireAuth) {
  function getAuth() {
    const userAutorotation = false;
    return userAutorotation;
  }
  const isAuthenticated = getAuth();
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}

function App() {
  return (
    <Router>
      <ReactNotifications />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={(
            <RequireAuth redirectTo="/login">
              <Main />
            </RequireAuth>
          )}
        />
        <Route path="*" element={<Error />} />
        <Route path="/Moderation" element={<Moderation />} />
      </Routes>
    </Router>
  );
}

export default App;
