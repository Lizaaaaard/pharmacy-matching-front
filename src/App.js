import React, {useEffect, useState} from "react";
import './styles/App.css';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import {AuthContext, CartContext, SearchContext} from "./context";
import Footer from "./components/UI/Footer/Footer";


function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [cart, setCart] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    
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
            <SearchContext.Provider value={{
                searchValue,
                setSearchValue
            }}>
                <CartContext.Provider value={{
                    cart,
                    setCart
                }}>
                    <BrowserRouter>
                        <Navbar/>
                        <div className="App">
                            <AppRouter/>
                        </div>
                        <Footer/>
                    </BrowserRouter>
                </CartContext.Provider>
            </SearchContext.Provider>
            
        </AuthContext.Provider>
    );
}

export default App;
