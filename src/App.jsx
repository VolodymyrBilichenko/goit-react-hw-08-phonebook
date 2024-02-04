import React from 'react';

import { Layout } from './components/layout/Layout';
import { LoginPage, Dashboard } from './pages';
import { RegisterForm } from './components/registrationFrom/registerForm';
import { refreshCurrentUser } from './redux/auth/auth-operations';
import { PrivateRoute } from './components/privateRoute';
import {Toast} from './components/toats/toats'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PublicRoute } from './components/publickRoute';
import { Navigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('диспатч');
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Toast/>
      <Routes>
      
        <Route path="/" element={<Layout />}>
        
        <Route path="*" element={<Navigate to="/" />} />
        
          <Route
            path="register"
            element={
              <PublicRoute redirectTo="/" component={<RegisterForm />} />
            }
          />

          <Route
            path="login"
            element={<PublicRoute redirectTo="/dashboard" component={<LoginPage />} />}
          />
          

          <Route
            path="dashboard"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<Dashboard />}
              ></PrivateRoute>
            }
          />

        </Route>
      </Routes>
    </>
  );
};