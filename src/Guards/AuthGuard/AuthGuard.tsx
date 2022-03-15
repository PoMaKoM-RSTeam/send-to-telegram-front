import React from 'react';
import { Navigate } from 'react-router-dom';

interface IRequireAuth {
  children: JSX.Element;
  redirectTo: string;
}

export default function RequireAuth({ children, redirectTo }: IRequireAuth) {
  function getAuth(): boolean {
    return !!localStorage.getItem('user');
  }
  const isAuthenticated = getAuth();
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}
