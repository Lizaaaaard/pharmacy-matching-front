import React from 'react';
import moment from "moment";
import StatusToolTip from "./UI/ToolTip/StatusToolTip";
import {useTranslation} from "react-i18next";

const HistoryTableRow = ({booking, showOrder}) => {
    const {t, i18n} = useTranslation();
    
    return (
        <tr className="historyTableRow" onClick={() => showOrder(booking)}>
            <td>
                {booking.orderId}
            </td>
            <td>
                {moment(booking.orderDate).format("YYYY/MM/DD kk:mm")}
            </td>
            <td>
                {booking.pharmacyTitle}
            </td>
            <td>
                {booking.status === "Cancelled"
                    ? <StatusToolTip status={booking.status}></StatusToolTip>
                    : booking.status === "Approved"
                    ? <div>Подтвержден</div> 
                        : <div>В обработке</div>
                }
            </td>
            <td>
                {booking.totalPrice} {t("byn")}
            </td>
        </tr>
    );
};

export default HistoryTableRow;