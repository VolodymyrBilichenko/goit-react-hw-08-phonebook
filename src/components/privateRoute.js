
import { Navigate} from "react-router-dom";
import {useAuth} from '../hooks/useAuth'
// import { useSelector } from "react-redux";


export  function PrivateRoute ({component: Component, redirectTo='/'}) {

   const {isLogIn, isRefreshing} = useAuth()

  const shouldRedirect = !isLogIn && !isRefreshing;  

return shouldRedirect ? <Navigate to={redirectTo}/> : Component;

};
