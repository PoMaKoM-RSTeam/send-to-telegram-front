import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReactNotifications } from 'react-notifications-component';
import Login from './Pages/LoginPage/LoginPage';
import Error from './Pages/ErrorPage';
import Main from './Views/MainView/MainView';
import RequireAuth from './Guards/AuthGuard/AuthGuard';

function App() {
  return (
    <Router>
      <ReactNotifications />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={
            <RequireAuth redirectTo="/login">
              <Main />
            </RequireAuth>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
