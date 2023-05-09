import React, {useContext} from 'react';
import {AuthContext} from "../context";
import RegisterForm from "../components/RegisterForm";


const Register = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    
    return (
        <div className="registerContainer">
            <div className="registerContainer__title">
                <hr></hr>
                <h1>Sign Up</h1>
                <hr></hr>
            </div>
            <RegisterForm/>
        </div>
    );
};

export default Register;