import React, {useEffect, useState} from 'react';
import UserInfo from "./UserInfo";
import BookingHistory from "./BookingHistory";
import {useFetching} from "../hooks/useFetching";
import UserService from "../API/UserService";
import OrderDetails from "./OrderDetails";
import Modal from "./UI/Modal/Modal";

const ProfileInfo = () => {    
    return (
        <div className="userProfile">
            <UserInfo/>
            <BookingHistory/>
        </div>
    );
};

export default ProfileInfo;