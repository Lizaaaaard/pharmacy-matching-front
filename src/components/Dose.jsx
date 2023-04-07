﻿import React from 'react';

const Dose = ({dose}) => {
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
            <td className="price">{dose.minPrice === dose.maxPrice ? dose.minPrice : dose.minPrice + " - " + dose.maxPrice} BYN</td>
            <td className="available">available in {dose.availability} pharmac{dose.availability === 1 ? "y" : "ies"}</td>
            <td className="medcButton">
                <button>Add to cart</button>
            </td>
        </tr>
    );
};

export default Dose;