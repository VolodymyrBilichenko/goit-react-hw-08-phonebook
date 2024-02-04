import { createAsyncThunk } from "@reduxjs/toolkit"
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"





axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'


    const token = {
        set(token){
            axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        },
        unset(){
            axios.defaults.headers.common.Authorization = '';
        }
    };


   export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI)  => {
        try{
            const res = await axios.post('users/signup', credentials)
            token.set(res.data.token)
            toast.success(`Welcome`);
            return res.data
        }
        catch(err){
            
           return thunkAPI.rejectWithValue(err.message)
        }
    }
    );


    export const refreshCurrentUser = createAsyncThunk(
        'auth/refresh_current_user',
        async (_, thunkAPI) => {
            
                 const state = thunkAPI.getState();
                const persistedToken = state.user.token;
            
                if (persistedToken === null) {
                    
                    return thunkAPI.rejectWithValue('Unable to fetch user');
                }


            
           try{
            token.set(persistedToken);
            const res = await axios.get('/users/current');
            return res.data;


           }
           catch(err){
            return thunkAPI.rejectWithValue(err.message);
           }

        }

    )





    export const login = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
        try{
            const res = await axios.post('users/login', credentials)
            token.set(res.data.token)
            toast.success(`Welcome`);
            return res.data
        }
        catch(err){
            toast.error('invalid e-mail or password')
           return thunkAPI.rejectWithValue(err.message)
        }
    }
);

export const logout = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try{
            const response = await axios.post('users/logout')
            token.unset()
            return response.data
        }catch(err){
            return thunkAPI.rejectWithValue(err.message)
        }
    }
)
