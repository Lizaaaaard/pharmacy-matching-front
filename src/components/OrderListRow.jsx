import React from 'react';
import moment from "moment/moment";
import {useTranslation} from "react-i18next";

const OrderListRow = ({booking, setBooking, showOrder, approveOrder}) => {    
    const {t, i18n} = useTranslation();
    return (
            <tr className="orderTableRow">
                <td  onClick={() => showOrder(booking)}>
                    {booking.orderId}
                </td>
                <td>
                    {booking.userId}
                </td>
                <td>
                    {moment(booking.orderDate).format("YYYY/MM/DD kk:mm")}
                </td>
                <td>
                    {booking.pharmacyTitle}
                </td>
                    {
                        booking.status === "Processing"
                        ? <td>В обработке</td>
                        : booking.status === "Approved" 
                                ? <td>Подтвержден</td>
                                : <td>Отменен</td>
                    }
                <td>
                    {booking.totalPrice} {t("byn")}
                </td>
                {
                    booking.status === "Processing"
                    ?
                        <td className="orderTableBtn">
                            <button onClick={() => approveOrder(booking.orderId)}>{t("approveBtn")}</button>
                        </td> 
                        :
                        <td></td>
                }
            </tr>
    );
};

export default OrderListRow;