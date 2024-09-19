import {Link} from "react-router-dom";
import React, {useContext, useState} from "react";
import companyLogo from "/src/styles/images/logo.jpg";
import '/src/styles/App.css';
import {AuthContext, CartContext, UserRoleContext} from "../../../context";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import i18n from "i18next";
import {useTranslation} from "react-i18next";


const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  const {cart, setCart} = useContext(CartContext);
  const {userRole, setUserRole} = useContext(UserRoleContext);
  const [lang, setLang] = useState('ru');
    const {t, i18n} = useTranslation();
  
  function changeIsAuth(){
      setIsAuth(false);
      sessionStorage.removeItem("auth");
      setCart([]);
  }

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        setLang(language);
    }
  
  return (
      <div className="navbar">
          <div className="navbar__links">
              <div className="directionLinks">
                  <Link to='/search'><img src={companyLogo} alt='Pharmacy Matching logo'/></Link>
                  <Link to='/pharmacies'>{t("pharmacies")}</Link>
                  {userRole === "Admin" && isAuth === true
                      ?
                      <div className="admin-panel">
                          <div className="manageOrders">
                              <Link to="/manage-orders">{t("manageOrders")}</Link>
                          </div>
                          <div className="manageRoles">
                              <Link to="/manage-roles">{t("manageRoles")}</Link>
                          </div>
                      </div>
                      :
                        <div></div>
                  }
                  {userRole === "Manager" && isAuth === true
                      ?
                      <div className="admin-panel">
                          <div className="manageOrders">
                              <Link to="/manage-orders">{t("manageOrders")}</Link>
                          </div>
                      </div>
                      :
                      <div></div>
                  }
              </div>
              <div className="right-part-navbar">
                  <div className="localization">
                      {lang === "ru"
                          ?
                          <button onClick={() => changeLanguage("en")}>eng</button>
                          :
                          <button onClick={() => changeLanguage("ru")}>ru</button>
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
                                  <Link to="/profile">{t("profile")}</Link>
                                  {
                                      cart.length === 0
                                          ?
                                          <Link to="#" className="cartLink">
                                              {t("cart")}
                                              <i className="bi bi-basket-fill"></i>
                                              <div className="cartSize">{cart.length}</div>
                                          </Link>
                                          :
                                          <Link to="/cart" className="cartLink">
                                              {t("cart")}
                                              <i className="bi bi-basket-fill"></i>
                                              <div className="cartSize">{cart.length}</div>
                                          </Link>
                                  }
                                  <Link to='/' onClick={changeIsAuth}>{t("logOut")}</Link>
                              </div>
                          </div>:
                          <Link to='/login'>{t("logIn")}</Link>
                      }
                  </div>
              </div>
              
          </div>
          
      </div>
  );  
};

export default Navbar;