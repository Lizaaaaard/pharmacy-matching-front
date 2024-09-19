import React, {useContext} from 'react';
import searchPage1 from '../styles/images/searchPage1.png';
import searchPage2 from '../styles/images/searchPage2.png';
import searchPage3 from '../styles/images/searchPage3.png';
import Arrow1 from '../styles/images/Arrow1.png';
import Arrow2 from '../styles/images/Arrow2.png';
import {LocalizationContext} from "../context";
import {useTranslation} from "react-i18next";

const Description = () => {
    const {t, i18n} = useTranslation();
    
    return (
        <div className="description">
            <div className="descriptionElement">
                <img src={searchPage1} alt="image1"/>
                <div className="descriptionTitle">
                    {t("descrTitle1")}
                </div>
                <div className="descriptionText">
                    {t("descrText1")}
                </div>
            </div>
            <div className="descriptionElement">
                <img src={Arrow1} alt="arrow"/>
            </div>
            <div className="descriptionElement">
                <img src={searchPage2} alt="image2"/>
                <div className="descriptionTitle">
                    {t("descrTitle2")}
                </div>
                <div className="descriptionText">
                    {t("descrText2")}
                </div>
            </div>
            <div className="descriptionElement">
                <img src={Arrow2} alt="arrow" id="arrow"/>
            </div>
            <div className="descriptionElement">
                <img src={searchPage3} alt="image3"/>
                <div className="descriptionTitle">
                    {t("descrTitle3")}
                </div>
                <div className="descriptionText">
                    {t("descrText3")}
                </div>
            </div>
        </div>
    );
};

export default Description;