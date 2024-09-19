import React, {useContext, useState} from 'react';
import {AuthContext, UserRoleContext} from "../context";
import {useFetching} from "../hooks/useFetching";
import AuthService from "../API/AuthService";
import {Link, useNavigate} from "react-router-dom";
import Register from "../pages/Register";
import {Buffer} from "buffer";
import {useTranslation} from "react-i18next";

const LoginForm = () => {
    const {userRole, setUserRole} = useContext(UserRoleContext);
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const [inputLogin, setInputLogin] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [fetchAuth, isLoading, errorAuth] = useFetching(async () => {
        let request = {UserName: inputLogin, Password: inputPassword};
        await AuthService.login(request)
            .then(response => {
                sessionStorage.setItem("token", response.data);
                sessionStorage.setItem("login", inputLogin);
                sessionStorage.setItem("auth", true);
                let role = getRoleFromJwt(response.data);
                setUserRole(role);
                setIsAuth(true);
                redirectHome();
            })
            .catch(err => {
                alert(err.response.data);
                setIsAuth(false);
            });
             
        
    });
    const{t, i18n} = useTranslation();

    function getRoleFromJwt (token) {
        var Buffer = require('buffer/').Buffer;
        let base64Url = token.split('.')[1]; // token you get
        let base64 = base64Url.replace('-', '+').replace('_', '/');
        let decodedData = JSON.parse(Buffer.from(base64, 'base64').toString('binary'));
        return decodedData.role;
    }
    
    function login (event){
        event.preventDefault();
        fetchAuth();
    }

    const navigate = useNavigate();
    function redirectHome() {
        navigate('/search');
    }
    
    return (
        <div className='loginForm__container'>
            <form onSubmit={login}>
                <input
                    type='text'
                    placeholder={t("username")}
                    id="loginValue"
                    value={inputLogin}
                    onChange={e => setInputLogin(e.target.value)}
                />
                <input
                    type ='password'
                    placeholder={t("password")}
                    id="passwordValue"
                    value={inputPassword}
                    onChange={e => setInputPassword(e.target.value)}
                />
                <button>{t("submit")}</button>
            </form>
            <div className="loginForm__links">
{/*                <Link to={}>Forgot your password?</Link>*/}
                <Link to="/register">{t("register")}</Link>
            </div>
        </div>
    );
};

export default LoginForm;