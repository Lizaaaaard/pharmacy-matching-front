import React, {useContext, useEffect, useState} from 'react';
import {useFetching} from "../hooks/useFetching";
import AuthService from "../API/AuthService";
import PharmsService from "../API/PharmsService";
import UserService from "../API/UserService";
import {UserContext} from "../context";
import {useTranslation} from "react-i18next";

const UserInfo = () => {
    const [userId, setUserId] = useState(0);
    const [userLogin, setUserLogin] = useState();
    const [userEmail, setUserEmail] = useState();
    const [userPhoneNumber, setUserPhone] = useState();
    const [fetchProfile, isLoading, errorAuth] = useFetching(async () => {
        let username = sessionStorage.getItem("login");
        let response = await UserService.getUser(username);
        setUserId(response.id);
        setUserLogin(response.login);
        setUserEmail(response.email);
        setUserPhone(response.phoneNumber);
    });
    const {t, i18n} = useTranslation();

    useEffect(()=>{
        fetchProfile();
    },[]);
    function changeInfo(){
        let newData = {Id: userId, Login: userLogin, Email:userEmail, PhoneNumber: userPhoneNumber};
        let response = UserService.updateUser(newData);
        if(response.status === 200){
            setUserLogin(response.data.login);
            setUserEmail(response.data.email);
            setUserPhone(response.data.phoneNumber);
        }
    }
    
    return (
        <div className="userInfo">
            <h1>{t("personalInfoTitle")}</h1>
            <div className="profileLogin">
                {t("personalInfoLogin")}
                <input
                    type='text'
                    value={userLogin}
                    onChange={e => setUserLogin(e.target.value)}
                />
            </div>
            <div className="profileEmail">
                {t("personalInfoEmail")}
                <input
                    type='text'
                    value={userEmail}
                    onChange={e => setUserEmail(e.target.value)}
                />
            </div>
            <div className="profilePhoneNum">
                {t("personalInfoPN")}
                <input
                    type='text'
                    value={userPhoneNumber}
                    onChange={e => setUserPhone(e.target.value)}
                />
            </div>
            <div className="saveChangesBtn">
                <button onClick={changeInfo}>{t("saveChanges")}</button>
            </div>
        </div>
    );
};

export default UserInfo;