import React, {useState} from 'react';
import {useFetching} from "../hooks/useFetching";
import AuthService from "../API/AuthService";
import {useNavigate} from "react-router-dom";

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
                    placeholder='Username'
                    id="loginValue"
                    value={usernameValue}
                    onChange={e => setUsernameValue(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='Email'
                    id="emailValue"
                    value={userEmail}
                    onChange={e => setUserEmail(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='Phone number'
                    id="numberValue"
                    value={userPhone}
                    onChange={e => setUserPhone(e.target.value)}
                />
                <input
                    type ='password'
                    placeholder='Password'
                    id="passwordValue"
                    value={userPassword}
                    onChange={e => setUserPassword(e.target.value)}
                />
                <input
                    type ='password'
                    placeholder='Repeat password'
                    id="passwordValue"
                    value={repeatPassword}
                    onChange={e => setRepeatPassword(e.target.value)}
                />
                <button type='submit'>Register</button>
            </form>
        </div>
    );
};

export default RegisterForm;