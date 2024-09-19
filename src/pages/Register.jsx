import React, {useContext} from 'react';
import {AuthContext} from "../context";
import RegisterForm from "../components/RegisterForm";
import {useTranslation} from "react-i18next";


const Register = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const{t, i18n} = useTranslation();
    
    return (
        <div className="registerContainer">
            <div className="registerContainer__title">
                <hr></hr>
                <h1>{t("signUp")}</h1>
                <hr></hr>
            </div>
            <RegisterForm/>
        </div>
    );
};

export default Register;