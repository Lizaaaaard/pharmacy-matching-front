import React, {useContext, useState} from 'react';
import {UserRoleContext} from "../context";
import {useTranslation} from "react-i18next";

const AddPharmacyForm = ({addPharmacy}) => {
    const [inputTitle, setInputTitle] = useState('');
    const [inputAddress, setInputAddress] = useState('');
    const [inputDescription, setInputDescription] = useState('');
    const [inputPhoneNumber, setInputPhoneNumber] = useState('');
    const {t, i18n} = useTranslation();
    
    return (
        <div className="addPharmacyForm">
            <h1>{t("pharmFormTitle")}</h1>
            <input
                type='text'
                placeholder={t("pharmFormInputTitle")}
                value={inputTitle}
                onChange={e => setInputTitle(e.target.value)}
            />
            <input
                type='text'
                placeholder={t("pharmFormInputAddress")}
                value={inputAddress}
                onChange={e => setInputAddress(e.target.value)}
            />
            <input
                type ='text'
                placeholder={t("pharmFormInputWH")}
                value={inputDescription}
                onChange={e => setInputDescription(e.target.value)}
            />
            <input
                type ='text'
                placeholder={t("pharmFormInputPN")}
                value={inputPhoneNumber}
                onChange={e => setInputPhoneNumber(e.target.value)}
            />
            <button onClick={()=> addPharmacy({
                Name: inputTitle,
                Description: inputDescription,
                Address: inputAddress,
                PhoneNumber: inputPhoneNumber
            })}>{t("pharmFormBtn")}</button>
        </div>
    );
};

export default AddPharmacyForm;