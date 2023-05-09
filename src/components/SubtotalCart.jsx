import React, {useContext, useState} from 'react';
import {CartPriceContext} from "../context";

const SubtotalCart = ({count}) => {
    const {resultSum, setResultSum} = useContext(CartPriceContext);
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
                        <button>proceed to checkout</button>
                    </div>
                    <div className="orCart">or</div>
                    <div className="shoppingBtn">
                        <button>continue shopping</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default SubtotalCart;