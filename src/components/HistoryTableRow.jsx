import React from 'react';
import moment from "moment";

const HistoryTableRow = ({booking, showOrder}) => {
    
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
                {booking.status}
            </td>
            <td>
                {booking.totalPrice} BYN
            </td>
        </tr>
    );
};

export default HistoryTableRow;