import React, {useContext, useEffect, useState} from 'react';
import CartTableRow from "./CartTableRow";
import {CartContext, CartPriceContext} from "../context";
import {useTranslation} from "react-i18next";

const CartTable = ({medInPharm}) => {
    const {cart, setCart} = useContext(CartContext);
    const {resultSum, setResultSum} = useContext(CartPriceContext);
    const {t, i18n} = useTranslation();
    
    useEffect(() => {
        let totalSum = 0;
        for(let i = 0; i < medInPharm.item2.length; i++){
            let cartElement = cart.filter(cartElement => cartElement.medc.id === medInPharm.item2[i].medcId && cartElement.dose.id === medInPharm.item2[i].doseId)[0];
            if (cartElement !== undefined) {
                totalSum += medInPharm.item2[i].price * cartElement.count;
            }
        }
        setResultSum(totalSum);
        console.log(totalSum);
    }, [medInPharm]);

    return (
        <div>
                <table className="cartTable">
                    <thead className="cartHeader">
                    <tr>
                        <th className="cartItemName">
                            {t("addedItems")}
                        </th>
                        <th className="cartItemDose">
                            {t("doseForm")}
                        </th>
                        <th className="cartItemProducer">
                            {t("producer")}
                        </th>
                        <th className="cartItemPrice">
                            {t("price")}
                        </th>
                        <th className="cartItemAmount">
                            {t("quantity")}
                        </th>
                        <th className="cartItemSum">
                            {t("total")}
                        </th>
                        <th className="cartItemDel">
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {medInPharm.item2.map(med => 
                        <CartTableRow 
                            medInPharm={med} 
                            key={med.id}
                            cart={cart} 
                            setCart={setCart}
                        />
                    )}
                    </tbody>
                </table>
        </div>
    );
};

export default CartTable;