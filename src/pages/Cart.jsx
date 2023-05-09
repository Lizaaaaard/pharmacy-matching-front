import React, {useContext, useState} from 'react';
import CartTable from "../components/CartTable";
import {CartPriceContext} from "../context";
import SubtotalCart from "../components/SubtotalCart";

const Cart = () => {
    const [resultSum, setResultSum] = useState(0);
    const [medInPharm, setMedInPharm] = useState(
        {
            item1: {
                id: 10,
                name: "Pharmacy №11",
                description: "Working hours: 8:00 - 21:00, no lunches, no days off",
                address: "16, Gray-Village avenue",
                phoneNumber: "3434565768999"
            },
            item2: [
                {
                    id: 15,
                    pharmId: 10,
                    medcId: 1,
                    doseId: 1,
                    price: 4.55,
                    amount: 24
                },
                {
                    id: 16,
                    pharmId: 10,
                    medcId: 7,
                    doseId: 12,
                    price: 8.20,
                    amount: 17
                },
                {
                    id: 17,
                    pharmId: 10,
                    medcId: 14,
                    doseId: 5,
                    price: 24.00,
                    amount: 19
                }
            ]
        }
    );
    return (
        <CartPriceContext.Provider value={{
            resultSum,
            setResultSum
        }}>
        <div>
            <h1 className="cartTitle">Cart</h1>
            <CartTable medInPharm={medInPharm.item2}/>
            <SubtotalCart
                count={medInPharm.item2.length}
                totalPrice={resultSum}
            />
        </div>
        </CartPriceContext.Provider>
    );
};

export default Cart;