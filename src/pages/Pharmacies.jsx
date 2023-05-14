import React, {useContext, useState} from 'react';
import PharmTitle from "../components/PharmTitle";
import PharmsList from "../components/PharmsList";
import {UserRoleContext} from "../context";
import NewPharmModal from "../components/UI/Modal/NewPharmModal";
import AddPharmacyForm from "../components/AddPharmacyForm";
import AdminService from "../API/AdminService";

const Pharmacies = () => {
    return (
        <div className="pharmacies">
            <PharmTitle/>
            <PharmsList/>
        </div>
    );
};

export default Pharmacies;