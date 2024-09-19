import React, {useContext, useState} from 'react';
import BookingHistory from "../components/BookingHistory";
import UserInfo from "../components/UserInfo";
import ProfileInfo from "../components/ProfileInfo";
import {UserContext} from "../context";
import Modal from "../components/UI/Modal/Modal";
import OrderDetails from "../components/OrderDetails";
import {useTranslation} from "react-i18next";

const Profile = () => {
    const{t, i18n} = useTranslation();
    
    return (
        <div className="Profile">
            <h1>{t("profileInfoTitle")}</h1>
            <ProfileInfo/>
        </div>
    );
};

export default Profile;