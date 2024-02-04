import { useDispatch, useSelector } from 'react-redux';
// import { toast } from "react-toastify"
import { logout } from '../../redux/auth/auth-operations';
import style from './userMenustyle.module.scss';
import Avatar from '@mui/material/Avatar';
export const Usermenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user.name);

  return (
    <>
      <h1 style={style.phonebook}>
        Phonebook
      </h1>
      <div className={style.wrapper}>
        <p className={style.username}> Welcome, {user}</p>
        <Avatar alt={user} Sharp src="/static/images/avatar/1.jpg" />
        <button
          type="button"
          className={style.button}
          onClick={() => {
            dispatch(logout());
          }}
        >
          Log Out
        </button>
      </div>
    </>
  );
};
