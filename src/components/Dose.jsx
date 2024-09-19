import React, {useContext, useEffect} from 'react';
import {CartContext} from "../context";
import {useTranslation} from "react-i18next";

const Dose = ({dose, medc}) => {
    const {cart, setCart} = useContext(CartContext);
    const handlerClick = () => {
        var cartElement = {
            medc: medc,
            dose: dose,
            count: 1
        }
        setCart([...cart,cartElement]);
    }
    const{t, i18n} = useTranslation();
        
    function cartIncludesMedc(medcId, doseId){
        let includes = false;
        cart.forEach(cartElement => {
                if (cartElement.medc.id === medcId && cartElement.dose.id === doseId) {
                    includes = true;
                }
            });
        return includes;
    }
    
    if(dose.availability === 0) {
        return (
            <tr className="dose">
                <td className="package">{dose.package}</td>
                <td className="price"></td>
                <td className="available">
                    <b>not available</b>
                </td>
                <td className="medcButton">
                    <button disabled>Add to cart</button>
                </td>
            </tr>
        );
    }
    return (
        <tr className="dose">
            <td className="package">{dose.package}</td>
            <td className="price">{dose.minPrice === dose.maxPrice ? dose.minPrice : dose.minPrice + " - " + dose.maxPrice} {t("byn")}</td>
            <td className="available">{t("availableIn")} {dose.availability} {dose.availability === 1 ? <p>{t("pharmOne")}</p> : <p>{t("pharmMore")}</p>}</td>
            {cartIncludesMedc(medc.id, dose.id) 
                ? <td className="medcButton">
                    <button disabled>{t("alreadyInCart")}</button>
                  </td>
                : <td className="medcButton">
                    <button className="buttonHovering" onClick={handlerClick}>{t("addToCart")}</button>
                  </td>
            }
        </tr>
    );
};

export default Dose;