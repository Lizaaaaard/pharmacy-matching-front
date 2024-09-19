import React, {useEffect, useState} from "react";
import './styles/App.css';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import {AuthContext, CartContext, SearchContext, UserRoleContext} from "./context";
import Footer from "./components/UI/Footer/Footer";


function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [userRole, setUserRole] = useState('');
    const [cart, setCart] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    
    useEffect(() =>{
        if(sessionStorage.getItem('auth')){
            setIsAuth(true);
            let role = getRoleFromJwt(sessionStorage.getItem("token"));
            setUserRole(role);
        }
    }, [])
    
        function getRoleFromJwt (token) {
            var Buffer = require('buffer/').Buffer;
            let base64Url = token.split('.')[1]; // token you get
            let base64 = base64Url.replace('-', '+').replace('_', '/');
            let decodedData = JSON.parse(Buffer.from(base64, 'base64').toString('binary'));
            return decodedData.role;
        }
        
    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <UserRoleContext.Provider value={{
                userRole,
                setUserRole
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
        </UserRoleContext.Provider>
        </AuthContext.Provider>
    );
}

export default App;
