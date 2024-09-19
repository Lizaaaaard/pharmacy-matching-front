import React, {useContext, useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useTranslation} from "react-i18next";

const SearchInput = ({inputValue, setInputValue}) => {
    const navigate = useNavigate();
    const {t, i18n} = useTranslation();
    function handleClick() {
        navigate('/medicines?searchValue=' + inputValue);
    }
    
    return (
        <div className="searchContainer">
            <input 
                type="text"
                placeholder={t("inputMedcTitle")}
                id="inputText"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            <button onClick={handleClick}>{t("searchBtn")}</button>
        </div>
    );
};

export default SearchInput;