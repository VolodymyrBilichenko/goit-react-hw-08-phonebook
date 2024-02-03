
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import style from './styleAuth.module.scss'
export const AuthNav = () => {
   const islogin = useSelector(state => state.user.isLogIn)
   console.log(islogin);
 return (
    <div >
       <ul >

         <NavLink to='/' className={style.link}>Home</NavLink>

         {!islogin &&  <NavLink to="/login" className={style.link}>log In</NavLink>}

         {!islogin ? <NavLink to='/register' className={style.link}>register</NavLink>
          : <NavLink to='/dashboard' className={style.link}>Contacts</NavLink>}
        
       </ul>
    </div>
 )
}
