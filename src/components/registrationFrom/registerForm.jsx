// import { useState } from "react";
import { useDispatch } from "react-redux";
import {register} from '../redux/auth/auth-operations';
import style from './registerFrom.module.scss';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
export const RegisterForm = () => {
    const dispatch = useDispatch()
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = form.elements.name.value;
        const email = form.elements.email.value;
        const password = form.elements.password.value;

        dispatch(register({name, email, password}))
       
    }

  return (
    <div className={style.container}>

      <form onSubmit={handleSubmit} className={style.form}>
      <div className={style.formfield}>

        <label className={style.label}>
          
          <span><DriveFileRenameOutlineIcon/></span>
        </label>
        <input type="text" name="name" className={style.input}  placeholder='name'/>
      </div>
      
      <div className={style.formfield}>
        <label className={style.label}>
          <span><PersonOutlineOutlinedIcon color='inherit'/></span>
          
        </label>
        <input type="text" name="email" className={style.input} placeholder='email'/>
      </div>
        
      <div className={style.formfield}>
         <label className={style.label}>
          <span><LockPersonOutlinedIcon/></span>
          
        </label>
        <input type="password" name="password"  className={style.input} placeholder='password'/>
      </div>
       

        
        <button type="submit" className={style.buttonRegister}>Register</button>
      </form>
    </div>
  );
};