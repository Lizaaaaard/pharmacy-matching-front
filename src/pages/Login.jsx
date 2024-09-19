import React, {useContext, useState} from 'react';
import {AuthContext} from "../context";
import LoginForm from "../components/LoginForm";
import {useTranslation} from "react-i18next";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const {t, i18n} = useTranslation();
    
    const login = event =>{
        event.preventDefault();
        setIsAuth(true);
        sessionStorage.setItem('auth','true')
    }
    
    return (
        <div className="loginContainer">
            <div className="loginContainer__title">
                <hr></hr>
                <h1>{t("logIn")}</h1>
                <hr></hr>
            </div>
            <LoginForm/>
        </div>
    );
};

export default Login;