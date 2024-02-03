import React from 'react';
import { useSelector } from 'react-redux';

import {Usermenu} from '../userMenu/userMenu'
import {AuthNav} from '../authnav/authnav'
import style from './styleAppbar.module.scss'


export const AppBar = () => {
  const isLogIn = useSelector(state => state.user.isLogIn);
  
  console.log(isLogIn)
  
  
  return (
    <header className={style.header}>
      <nav className={style.nav}>
      <AuthNav/>
      
      
      </nav>
      
     {isLogIn &&  <Usermenu />}
     
      
    </header>
  );
};
