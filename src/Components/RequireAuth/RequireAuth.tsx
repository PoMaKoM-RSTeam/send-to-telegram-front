import React from 'react';
import { Navigate } from 'react-router-dom';

interface IRequireAuth {
  children: JSX.Element;
  redirectTo: string;
}

export default function RequireAuth({ children, redirectTo }: IRequireAuth) {
  function getAuth() {
    const userAutorotation = true;
    return userAutorotation;
  }
  const isAuthenticated = getAuth();
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}
