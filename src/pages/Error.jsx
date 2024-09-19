import React from 'react';
import {useTranslation} from "react-i18next";

const Error = () =>{
    const{t, i18n} = useTranslation();
    
    return(
        <div>
            <h1>{t("pageNotExist")}</h1>
        </div>
    );
};

export default Error;