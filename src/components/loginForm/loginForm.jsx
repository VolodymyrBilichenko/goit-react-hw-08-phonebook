import { useDispatch, useSelector } from 'react-redux';
import style from './styleLoginForm.module.scss';
import { login } from '../../redux/auth/auth-operations';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';
export const LoginForm = () => {
  const dispatch = useDispatch();

  const islogin = useSelector(state => state.user.isLogIn);
  console.log(islogin);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(login({ email, password }));
  };

  return (
    <>
      <div className={style.container}>
        <form onSubmit={handleSubmit} className={style.form} >
          <div className={style.formfield}>
            <label className={style.label}>
              <span>
                <PersonOutlineOutlinedIcon color='inherit'/>
              </span>
            
          
            </label>

            <input type="text" name="email" className={style.input} placeholder="email"/>

          </div>
          <div className={style.formfield}>
            <label className={style.label}>
              <span>
                <LockPersonOutlinedIcon/>
              </span>
              
            </label>
            <input type="password" name="password" className={style.input} placeholder="password"/>
          </div>

          <button type="submit" className={style.buttonlogin}>
            Log In
          </button>
        </form>
      </div>
    </>
  );
};
