import React from 'react';
import HistoryTable from "./HistoryTable";
import {useTranslation} from "react-i18next";

const BookingHistory = () => {
    const {t, i18n} = useTranslation();
    return (
        <div className="history">
           <h1>{t("bookingHistory")}</h1>
            <HistoryTable/>
        </div>
    );
};

export default BookingHistory;