import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {AuthContext} from "../context";
import {routes} from "../router";
import Search from "../pages/Search";
import Medicines from "../pages/Medicines";

const AppRouter = () =>{
    const {isAuth, setIsAuth} = useContext(AuthContext);
    // console.log(isAuth);
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
            <Route path='*' Component={Search}/>
        </Routes>
    );
};

export default AppRouter;