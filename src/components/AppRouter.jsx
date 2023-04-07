import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Medicines from "../pages/Medicines";
import Error from "../pages/Error";
import Login from "../pages/Login";
import {AuthContext} from "../context";
import {routes} from "../router";

const AppRouter = () =>{
    const {isAuth, setIsAuth} = useContext(AuthContext);
    console.log(isAuth);
    return(
        <Routes>
            {routes.map(route => 
                <Route 
                    Component={route.component} 
                    path={route.path} 
                    exact={route.exact}
                    key={route.path}
                />
            )}
                <Route path='*' Component={About}/>
        </Routes>
    );
};

export default AppRouter;