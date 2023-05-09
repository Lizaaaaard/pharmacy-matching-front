import React, {useContext, useState} from 'react';
import {AuthContext} from "../context";
import {useFetching} from "../hooks/useFetching";
import AuthService from "../API/AuthService";
import {Link, useNavigate} from "react-router-dom";
import Register from "../pages/Register";

const LoginForm = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const [inputLogin, setInputLogin] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [fetchAuth, isLoading, errorAuth] = useFetching(async () => {
        let request = {UserName: inputLogin, Password: inputPassword};
        await AuthService.login(request)
            .then(response => {
                sessionStorage.setItem("token", response.data);
                sessionStorage.setItem("auth", true);
                setIsAuth(true);
                redirectHome();
            })
            .catch(err => {
                alert(err.response.data);
                setIsAuth(false);
            });
             
        
    });
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
                    placeholder='Username'
                    id="loginValue"
                    value={inputLogin}
                    onChange={e => setInputLogin(e.target.value)}
                />
                <input
                    type ='password'
                    placeholder='Password'
                    id="passwordValue"
                    value={inputPassword}
                    onChange={e => setInputPassword(e.target.value)}
                />
                <button>Submit</button>
            </form>
            <div className="loginForm__links">
{/*                <Link to={}>Forgot your password?</Link>*/}
                <Link to="/register">Don't have an account?</Link>
            </div>
        </div>
    );
};

export default LoginForm;