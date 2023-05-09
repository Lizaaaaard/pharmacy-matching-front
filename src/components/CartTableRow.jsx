import React, {useContext, useEffect, useState} from 'react';
import {CartContext, CartPriceContext} from "../context";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const CartTableRow = ({medInPharm, cart, setCart}) => {
    const {resultSum, setResultSum} = useContext(CartPriceContext);
    const [cartElement, setCartElement] = useState();
    const [count, setCount] = useState(1);
    
    function findById() {
        for(let i = 0; i<cart.length;i++){
            if(cart[i].medc.id === medInPharm.medcId && cart[i].dose.id === medInPharm.doseId){
                setCartElement(cart[i]);
                setCount(cart[i].count);
            }
        }
    }
    
    function increaseCounter() {
        if(medInPharm.amount > count){
            setCount(count + 1);
            cartElement.count = count + 1;
            setResultSum(resultSum + medInPharm.price);
        }
    }

    function decreaseCounter(){
        if(count > 1){
            setCount(count - 1);
            cartElement.count = count - 1;
            setResultSum(resultSum - medInPharm.price);
        }
    }

    function deleteFromCart() {
        let i = cart.indexOf(cartElement);
        cart.splice(i,1);
        setCart(cart);
        setResultSum(resultSum - medInPharm.price * cartElement.count);
        setCartElement(undefined);
    }
    
    useEffect(() => {
        findById();
    },[]);
    
    return cartElement !== undefined ? (
            <tr className="cartTableRow">
                    <td className="crtName">
                        {cartElement.medc.title}
                    </td>
                    <td className="doseMedcInPharm">
                        {cartElement.dose.package}
                    </td>
                    <td className="producerMedcInPharm">
                        "{cartElement.medc.producer.company}", {cartElement.medc.producer.country}
                    </td>
                    <td className="priceMedcInPharm">
                        {medInPharm.price}
                    </td>
                    <td className="quantityMedcInPharm">
                        <button className="decreaseBtn" onClick={decreaseCounter}><i className="bi bi-dash-square"></i></button>
                        {count}
                        <button className="increaseBtn" onClick={increaseCounter}><i className="bi bi-plus-square"></i></button>
                    </td>
                    <td className="totalMedInPharm">
                        {(medInPharm.price * count).toFixed(2)} BYN
                    </td>
                    <td className="deleteBtnMedInPharm">
                        <button onClick={deleteFromCart}><i className="bi bi-x-circle-fill"></i></button>
                    </td>
            </tr>
    ): <div></div>
};

export default CartTableRow;