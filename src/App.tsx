import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReactNotifications } from 'react-notifications-component';
import Login from './pages/Login/Login';
import Error from './pages/error';
import Main from './pages/Main/Main';
import RequireAuth from './Components/RequireAuth/RequireAuth';

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
      </Routes>
    </Router>
  );
}

export default App;
