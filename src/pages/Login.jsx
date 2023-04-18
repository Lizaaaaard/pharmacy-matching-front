﻿import React, {useContext, useState} from 'react';
import {AuthContext} from "../context";
import LoginForm from "../components/LoginForm";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const [inputLogin, setInputLogin] = useState('');
    const login = event =>{
        event.preventDefault();
        setIsAuth(true);
        sessionStorage.setItem('auth','true')
    }
    
    return (
        <div className="loginContainer">
            <h1>LogIn</h1>
            <form onSubmit={login}>
                <input
                    type='text'
                    placeholder='Login'
                    /*value={inputLogin}
                    onChange={e => setInputLogin(e.target.value)*/
                />
                <input type ='password' placeholder='Password'></input>
                <button>Log In</button>
            </form>
        </div>
    );
};

export default Login;