import axios from 'axios';
import React, { createContext, useContext, useReducer } from 'react';
import jwt_decode from 'jwt-decode';
import { AUTH_API } from '../Helpers/constants';

const INIT_STATE = {
    user: null,
    loading: false,
    errorMessage: null,
    succes: false
}


const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'AUTH_SUCCES':
            return {
                ...state,
                loading: false,
                errorMessage: null,
                succes: true,
                user: action.payload,
            }
        case 'AUTH_LOADING':
            return {
                ...state,
                loading: true,
            }
        case 'AUTH_ERROR':
            return {
                ...state,
                user: null,
                loading: false,
                errorMessage: action.payload
            }
        case 'CLEAR_AUTH_STATE':
            return {
                ...state,
                loading: false,
                errorMessage: null,
                succes: false
            }
        case 'AUTH_LOGOUT':
            return {
                ...state,
                loading: false,
                errorMessage: null,
                succes: false,
                user: null
            }
        default: return state
    }
}

const authContext = createContext()

export const useAuth = () => {
    return useContext(authContext)
}

const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    const logout = () => {
        localStorage.removeItem('token')
        dispatch({
            type: 'AUTH_LOGOUT'
        })
    }
    const registerUser = async (newUser) => {
        try {
            dispatch({
                type: 'AUTH_LOADING'
            })
            const res = await axios.post(`${AUTH_API}/registration`, newUser)
            if (res.status >= 200 && res.status <= 299) {
                dispatch({
                    type: 'AUTH_SUCCES',
                    payload: null
                })
            } else {
                dispatch({
                    type: 'AUTH_ERROR',
                    payload: res.data.message
                })
            }
        } catch (error) {
            dispatch({
                type: 'AUTH_ERROR',
                payload: error.response.data.message

            })
        }

    }
    const loginUser = async (user) => {
        try {
            dispatch({ type: 'AUTH_LOADING' })
            const res = await axios.post(`${AUTH_API}/login`, user)
            console.log(res);
            const decoded = jwt_decode(res.data.token)
            const decodedUser = {
                email: decoded.id,
                exp: decoded.exp,
                iat: decoded.iat,
                id: decoded.email
            }
            localStorage.setItem('token', res.data.token);
            dispatch({
                type: 'AUTH_SUCCES',
                payload: decodedUser
            })
        } catch (error) {
            dispatch({
                type: 'AUTH_ERROR',
                payload: error.response.data.message
            })
        }
    }

    const checkAuth = () => {
        const token = localStorage.getItem("token");
        const decoded = jwt_decode(token)
        if (Date.now() > token.exp * 1000) {
            return;
        }
        dispatch({
            type: 'AUTH_SUCCES',
            payload: {
                email: decoded.id,
                exp: decoded.exp,
                iat: decoded.iat,
                id: decoded.email
            }
        })
    }

    const clearState = () => {
        dispatch({ type: 'CLEAR_AUTH_STATE' })
    }
    const values = {
        registerUser,
        loginUser,
        clearState,
        checkAuth,
        logout,
        user: state.user,
        lodaing: state.loading,
        errorMessage: state.errorMessage,
        succes: state.succes

    }
    return (
        <authContext.Provider value={values}>
            {children}
        </authContext.Provider>
    );
};

export default AuthContextProvider;