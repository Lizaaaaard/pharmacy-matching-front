import {Link} from "react-router-dom";
import React, {useContext, useState} from "react";
import companyLogo from "/src/styles/images/logo.jpg";
import '/src/styles/App.css';
import {AuthContext, CartContext, UserRoleContext} from "../../../context";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  const {cart, setCart} = useContext(CartContext);
    const {userRole, setUserRole} = useContext(UserRoleContext);
  
  function changeIsAuth(){
      setIsAuth(false);
      sessionStorage.removeItem("auth");
      setCart([]);
  }
    
  return (
      <div className="navbar">
          <div className="navbar__links">
              <div className="directionLinks">
                  <Link to='/search'><img src={companyLogo} alt='Pharmacy Matching logo'/></Link>
                  <Link to='/pharmacies'>Pharmacies</Link>
                  {userRole === "Admin" && isAuth === true
                      ?
                      <div className="manageOrders">
                          <Link to="/manage-orders">Manage orders</Link>
                      </div>
                      :<div></div>
                  }
              </div>
              <div className="loginLink">
                  {isAuth===true?
                      <div className="dropdown">
                          <div className="dropheader">
                              <i className="bi bi-person-circle"></i>
                              <i className="bi bi-caret-down-fill"></i>
                          </div>
                          <div className="dropdown-content">
                              <div className="dropdown-space"></div>
                              <div className="dropdown-play-fill">
                                  <i className="bi bi-play-fill"></i>
                              </div>
                              <Link to="/profile">Profile</Link>
                              {
                                  cart.length === 0
                                      ?
                                      <Link to="#" className="cartLink">
                                          Cart
                                          <i className="bi bi-basket-fill"></i>
                                          <div className="cartSize">{cart.length}</div>
                                      </Link>
                                      :
                                      <Link to="/cart" className="cartLink">
                                          Cart
                                          <i className="bi bi-basket-fill"></i>
                                          <div className="cartSize">{cart.length}</div>
                                      </Link>
                              }
                              <Link to='/' onClick={changeIsAuth}>Logout</Link>
                          </div>
                      </div>:
                      <Link to='/login'>Log In</Link>  
                  } 
              </div>
          </div>
          
      </div>
  );  
};

export default Navbar;