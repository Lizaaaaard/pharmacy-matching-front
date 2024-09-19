import React, {useContext} from 'react';
import {useTranslation} from "react-i18next";

const Footer = () => {
    const {t, i18n} = useTranslation();
    
    return (
        <footer>
            <div className="footer">
                {t("allRightsReserved")}
            </div>
        </footer>
        
    );
};

export default Footer;