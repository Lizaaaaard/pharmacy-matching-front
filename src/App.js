import React, {useEffect, useState} from "react";
import './styles/App.css';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";
import Footer from "./components/UI/Footer/Footer";


function App() {
    const [isAuth, setIsAuth] = useState(false);
    
    useEffect(() =>{
        if(sessionStorage.getItem('auth')){
            setIsAuth(true)
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
                <Footer/>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
