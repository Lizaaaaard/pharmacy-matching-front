import React, {useContext, useState} from 'react';
import {AuthContext} from "../context";
import LoginForm from "../components/LoginForm";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const login = event =>{
        event.preventDefault();
        setIsAuth(true);
        sessionStorage.setItem('auth','true')
    }
    
    return (
        <div className="loginContainer">
            <div className="loginContainer__title">
                <hr></hr>
                <h1>Log In</h1>
                <hr></hr>
            </div>
            <LoginForm/>
        </div>
    );
};

export default Login;