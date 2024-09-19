import React, {useState} from 'react';
import {useFetching} from "../hooks/useFetching";
import AuthService from "../API/AuthService";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

const RegisterForm = () => {
    const [usernameValue, setUsernameValue] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [fetchReg, isLoading, errorAuth] = useFetching(async () => {
        if(checkPasswords(userPassword, repeatPassword)){
            let request = {UserName: usernameValue, Email: userEmail, PhoneNumber: userPhone, Password: userPassword};
            await AuthService.register(request)
                .then(response => {
                    sessionStorage.setItem("token", response.data);
                    sessionStorage.setItem("auth", true);
                    sessionStorage.setItem("login", usernameValue);
                })
                .catch(err => alert(err.response.data));
            
            redirectHome();
        }
    });
    const {t, i18n} = useTranslation();
    function register (event){
        event.preventDefault();
        fetchReg();
    }
    
    function checkPasswords(userPassword, repeatPassword){
        if(userPassword === repeatPassword){
            return true;
        }
        else{
            alert("passwords doesn't match")
            console.log("wrong")
            return false;
        }
    }

    const navigate = useNavigate();
    function redirectHome() {
        navigate('/search');
    }
    
    return (
        <div className="registerForm">
            <form onSubmit={register}>
                <input
                    type='text'
                    placeholder={t("username")}
                    id="loginValue"
                    value={usernameValue}
                    onChange={e => setUsernameValue(e.target.value)}
                />
                <input
                    type='text'
                    placeholder={t("email")}
                    id="emailValue"
                    value={userEmail}
                    onChange={e => setUserEmail(e.target.value)}
                />
                <input
                    type='text'
                    placeholder={t("pn")}
                    id="numberValue"
                    value={userPhone}
                    onChange={e => setUserPhone(e.target.value)}
                />
                <input
                    type ='password'
                    placeholder={t("password")}
                    id="passwordValue"
                    value={userPassword}
                    onChange={e => setUserPassword(e.target.value)}
                />
                <input
                    type ='password'
                    placeholder={t("repeatPassword")}
                    id="passwordValue"
                    value={repeatPassword}
                    onChange={e => setRepeatPassword(e.target.value)}
                />
                <button type='submit'>{t("registerUser")}</button>
            </form>
        </div>
    );
};

export default RegisterForm;