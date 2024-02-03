import { useSelector } from "react-redux";

export const useAuth = () => {
    const isLogIn = useSelector(state => state.user.isLogIn);
    const user = useSelector(state => state.user.user)
    const isRefreshing = useSelector(state => state.user.isRefreshing)

    return {
        isLogIn,
        user,
        isRefreshing
    };
};
