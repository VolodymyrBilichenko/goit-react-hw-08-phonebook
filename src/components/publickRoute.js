import { Navigate } from 'react-router-dom';
import {useAuth} from '../hooks/useAuth'



export const PublicRoute = ({component: Component, redirectTo='/'}) => {
    const {isLogIn} = useAuth();
    console.log(isLogIn);
    return isLogIn ? <Navigate to={redirectTo}/> : Component;
}
