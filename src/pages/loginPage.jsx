import React from 'react';
import { LoginForm } from '../components/loginForm/loginForm';
import { useSelector } from 'react-redux';


export const LoginPage = () => {

  const isLogin = useSelector(state => state.user.isLogIn);
  console.log(isLogin);

  return (
    <>
      {!isLogin && <LoginForm />}
    </>
  );
};