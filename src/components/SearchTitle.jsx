import React from 'react';
import {useTranslation} from "react-i18next";

const SearchTitle = ({search}) => {
    const{t, i18n} = useTranslation();
    return (
        <div className='searchTitle'>
            <h1>{t("searchRes")} "{search}":</h1>
        </div>
    );
};

export default SearchTitle;