import React, {useContext} from 'react';
import {AuthContext} from "../context";

const LoginForm = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    function login (event){
        event.preventDefault();
        setIsAuth(true);
    }
    
    return (
        <div className='loginForm__container'>
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

export default LoginForm;