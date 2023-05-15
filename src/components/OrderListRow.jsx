import React from 'react';
import moment from "moment/moment";

const OrderListRow = ({booking, setBooking, showOrder, approveOrder}) => {    
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
                <td>
                    {booking.status}
                </td>
                <td>
                    {booking.totalPrice} BYN
                </td>
                {
                    booking.status === "Processing"
                    ?
                        <td className="orderTableBtn">
                            <button onClick={() => approveOrder(booking.orderId)}>Approve</button>
                        </td> 
                        :
                        <td></td>
                }
            </tr>
    );
};

export default OrderListRow;