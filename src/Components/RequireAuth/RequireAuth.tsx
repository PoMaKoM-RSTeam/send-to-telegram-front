import React from 'react';
import { Navigate } from 'react-router-dom';

interface IRequireAuth {
  children: JSX.Element;
  redirectTo: string;
}

export default function RequireAuth({ children, redirectTo }: IRequireAuth) {
  function getAuth(): boolean {
    const userAutorotation = false;
    if (userAutorotation) {
      return true;
    }
    // TODO: fix? do Notification
    // Store.addNotification({
    //   title: 'LOGIN INVALID',
    //   message: 'The login session is not valid. Retry sign in',
    //   type: 'danger',
    //   insert: 'top',
    //   container: 'top-right',
    //   animationIn: ['animate__animated', 'animate__fadeIn'],
    //   animationOut: ['animate__animated', 'animate__fadeOut'],
    //   dismiss: {
    //     duration: 5000,
    //     onScreen: true,
    //   },
    // });
    return false;
  }
  const isAuthenticated = getAuth();
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}
