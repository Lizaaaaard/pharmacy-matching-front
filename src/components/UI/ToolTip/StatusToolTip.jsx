import React, {useState} from 'react';
import classes from './StatusToolTip.module.css';
import {useTranslation} from "react-i18next";

const StatusToolTip = ({status}) => {
    const [showToolTip, setShowToolTip] = useState(false);
    const{t, i18n} = useTranslation(); 
    const onMouseEnterHandler = () =>{
        setShowToolTip(true);
    }
    
    const onMouseLeaveHandler = () =>{
        setShowToolTip(false);
    }
    
    return (
        <div className={classes.container} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
            Отменен
            {showToolTip && <div className={classes.tooltip}>
                {t("errMesProd")}
            </div>}
        </div>
    );
};

export default StatusToolTip;