import React, { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { useAuth } from '../hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

const HomePage = lazy(() => import('pages/Home'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));
const ContactsPage = lazy(() => import('pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
  <Routes>
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<HomePage />} />
      <Route
        path="/register"
        element={
          <PublicRoute redirectTo="/contacts" component={<RegisterPage />} />
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoute redirectTo="/contacts" component={<LoginPage />} />
        }
      />
      <Route
        path="/contacts"
        element={
          <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
        }
      />
    </Route>
  </Routes>
  );
};
