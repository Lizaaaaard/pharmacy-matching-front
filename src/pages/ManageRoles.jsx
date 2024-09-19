import React, {useState} from 'react';
import AllUserdRolesList from "../components/AllUserdRolesList";
import {useTranslation} from "react-i18next";

const ManageRoles = () => {
    const {t, i18n} = useTranslation();
    
    return (
        <div className="manageRoles">
            <div>
                <h1>{t("manageRoleTitle")}</h1>
                <AllUserdRolesList/>
            </div>
        </div>
    );
};

export default ManageRoles;