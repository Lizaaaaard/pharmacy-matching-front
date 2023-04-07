import {Link} from "react-router-dom";
import React, {useContext, useState} from "react";
import companyLogo from "/src/styles/images/logo.jpg";
import '/src/styles/App.css';
import {AuthContext} from "../../../context";


const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  
  const logout = () => {
      setIsAuth(false);
      sessionStorage.removeItem('auth')
  }
    
  return (
      <div className="navbar">
          <div className="navbar__links">
              <Link to='/search'><img src={companyLogo} alt='Pharmacy Matching logo'/></Link>
              <Link to='/medicines'>All medicines</Link>
              <Link to='/login'>Log In</Link>
              <button onClick={logout}>logout</button>
          </div>
          
      </div>
  );  
};

export default Navbar;