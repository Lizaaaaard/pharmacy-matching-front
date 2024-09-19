import React, {useContext, useState} from 'react';
import {CartPriceContext} from "../context";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

const SubtotalCart = ({count, proceed}) => {
    const {resultSum, setResultSum} = useContext(CartPriceContext);
    const {t, i18n} = useTranslation();
    const navigate = useNavigate();
    function redirectHome() {
        navigate('/medicines?searchValue=');
    }
    
    return (
        <div className="underCart">
            <div className="totalAmount">
                {t("totalAm")}{count}
            </div>
            <div className="orderFunctional">
                <div className="totalPrice">
                    <div>{t("subtotal")}</div> <div className="priceValue">{(resultSum).toFixed(2)} {t("byn")}</div>
                </div>
                <div className="cartButtons">
                    <div className="checkOutBtn">
                        <button onClick={proceed}>{t("proceed")}</button>
                    </div>
                    <div className="orCart">{t("or")}</div>
                    <div className="shoppingBtn">
                        <button onClick={redirectHome}>{t("continueShop")}</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default SubtotalCart;