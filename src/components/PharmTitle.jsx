import React from 'react';
import {useTranslation} from "react-i18next";

const PharmTitle = () => {
    const {t, i18n} = useTranslation();
    return (
        <div className="pharmacies__title">
            {t("pharmTitle")}
        </div>
    );
};

export default PharmTitle;