import React, {useContext, useState} from 'react';
import PharmTitle from "../components/PharmTitle";
import PharmsList from "../components/PharmsList";

const Pharmacies = () => {
    return (
        <div className="pharmacies">
            <PharmTitle/>
            <PharmsList/>
        </div>
    );
};

export default Pharmacies;