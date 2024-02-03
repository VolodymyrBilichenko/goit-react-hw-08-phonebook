import { createSlice } from "@reduxjs/toolkit";
import {register, login, logout, refreshCurrentUser} from './auth-operations';


// export const selectorlogin = (state => state.user.isLogIn)

const initialState = {
    user: {name: null, email: null},
    token: null,
    isLogIn: false,
    isloading: false,
    error: false,
    isRefreshing: false,
    alert: false,
}

export const userSlice = createSlice({
    name: "auth",
    initialState, 
    extraReducers:{

        [register.fulfilled](state, action) {
            state.user = action.payload.user
            state.token = action.payload.token
            state.isLogIn = true
        },

        [login.pending] (state, action) {
            state.isloading = true
            state.isLogIn = false;
            state.error = action.payload
        },

        [login.fulfilled] (state, {payload}) {
            state.user = payload.user
            state.isLogIn = true;
            state.token = payload.token;
            
        },
        [login.rejected] (state, action) {
            state.isloading = false
            state.isLogIn = false;
            state.error = action.payload  
            state.alert = true;  
        },
        [logout.fulfilled] (state, action) {
            state.user = {name: null, email: null}
            state.token =  null
            state.isLogIn = false
        },
        [refreshCurrentUser.pending](state, action) {
            state.isRefreshing = true
            
        },

        [refreshCurrentUser.fulfilled] (state, action) {
            state.user = action.payload
            state.isLogIn = true
            state.isRefreshing = false

            
        },
        [refreshCurrentUser.rejected] (state, action) {
            state.isRefreshing = false
        }



} 
}) 


export default userSlice.actions