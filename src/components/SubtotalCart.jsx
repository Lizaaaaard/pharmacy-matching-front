import React, {useContext, useState} from 'react';
import {CartPriceContext} from "../context";
import {useNavigate} from "react-router-dom";

const SubtotalCart = ({count, proceed}) => {
    const {resultSum, setResultSum} = useContext(CartPriceContext);

    const navigate = useNavigate();
    function redirectHome() {
        navigate('/search');
    }
    
    return (
        <div className="underCart">
            <div className="totalAmount">
                Total amount of items: {count}
            </div>
            <div className="orderFunctional">
                <div className="totalPrice">
                    <div>Subtotal:</div> <div className="priceValue">{(resultSum).toFixed(2)} BYN</div>
                </div>
                <div className="cartButtons">
                    <div className="checkOutBtn">
                        <button onClick={proceed}>proceed to checkout</button>
                    </div>
                    <div className="orCart">or</div>
                    <div className="shoppingBtn">
                        <button onClick={redirectHome}>continue shopping</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default SubtotalCart;