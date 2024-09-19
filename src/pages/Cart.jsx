import React, {useContext, useEffect, useState} from 'react';
import CartTable from "../components/CartTable";
import {CartContext, CartPriceContext} from "../context";
import SubtotalCart from "../components/SubtotalCart";
import CartService from "../API/CartService";
import {useNavigate} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import AvailablePharmaciesList from "../components/AvailablePharmaciesList";
import {useTranslation} from "react-i18next";

const Cart = () => {
    const [resultSum, setResultSum] = useState(0);
    const {cart, setCart} = useContext(CartContext);
    const [selectedMedInPharm, setSelectedMedInPharm] = useState({item1: {name:''}, item2: []});
    const [medInPharm, setMedInPharm] = useState([{item1: {}, item2: []}]);
    const navigate = useNavigate();

    const [fetchCart, isLoading, errorMedc] = useFetching(async () => {
        let response = await CartService.getPharmMedc(cart);
        setMedInPharm(response);
        setSelectedMedInPharm(response[0]);
    });
    const {t, i18n} = useTranslation();
    useEffect(() => {
        fetchCart();
    }, [])

    function getIdFromJwt(token) {
        var Buffer = require('buffer/').Buffer;
        let base64Url = token.split('.')[1]; // token you get
        let base64 = base64Url.replace('-', '+').replace('_', '/');
        let decodedData = JSON.parse(Buffer.from(base64, 'base64').toString('binary'));
        return decodedData.id;
    }

    function proceed() {
        let userId = getIdFromJwt(sessionStorage.getItem("token"));

        let listOfMedc = selectedMedInPharm.item2.map(function (med) {
            let orderMedc = {
                DoseId: med.doseId,
                MedcId: med.medcId,
                Amount: cart.filter(cartElement => cartElement.medc.id === med.medcId && cartElement.dose.id === med.doseId)[0].count
            }
            return orderMedc;
        });

        var order = {
            PharmId: selectedMedInPharm.item1.id,
            UserId: userId,
            MedcList: listOfMedc,
            Price: resultSum
        }

        CartService.booking(order).then(() => redirectHome());
    }

    function redirectHome() {
        console.log(123123)
        navigate('/search');
    }
    
    function changePharmacy(pharmacy) {
        let newSelectedMedc = medInPharm.filter(medc => medc.item1 === pharmacy)[0];
        console.log(newSelectedMedc);
        setSelectedMedInPharm(newSelectedMedc);
    }

    return (
        <CartPriceContext.Provider value={{
            resultSum,
            setResultSum
        }}>
            <div className="cartPage">
                <AvailablePharmaciesList selected={selectedMedInPharm} pharmacies={medInPharm.map(medc => medc.item1)} changePharmacy={changePharmacy}/>
                <div>
                    <h1 className="cartTitle">{t("cart")}</h1>
                    {
                        selectedMedInPharm !== undefined ?
                            <div>
                                <CartTable medInPharm={selectedMedInPharm}/>
                                <SubtotalCart
                                    count={selectedMedInPharm.item2.length}
                                    totalPrice={resultSum}
                                    proceed={proceed}
                                />
                            </div>
                            :
                            <div>{t("errNoPharm")}</div>
                    }

                </div>
            </div>
            
        </CartPriceContext.Provider>
    );
};

export default Cart;