import React, {useState} from 'react';
import AllOrdersList from "../components/AllOrdersList";
import {useTranslation} from "react-i18next";

const ManageOrders = () => {   
    const {t, i18n} = useTranslation();
    
    return (
        <div className="manageOrders">
            <div>
                <h1>{t("manageOrdersTitle")}</h1>
                <AllOrdersList/>
            </div>
        </div>
    );
};

export default ManageOrders;