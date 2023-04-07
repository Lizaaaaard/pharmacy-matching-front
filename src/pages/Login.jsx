import React, {useContext} from 'react';
import {AuthContext} from "../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login = event =>{
        event.preventDefault();
        setIsAuth(true);
        sessionStorage.setItem('auth','true')
    }
    
    return (
        <div className="loginContainer">
            <h1>LogIn</h1>
            <form onSubmit={login}>
                <input type='text' placeholder='Login'></input>
                <input type ='password' placeholder='Password'></input>
                <button>Log In</button>
            </form>
        </div>
    );
};

export default Login;