import React, {useContext, useEffect, useState} from 'react';
import HistoryTableRow from "./HistoryTableRow";
import {useFetching} from "../hooks/useFetching";
import UserService from "../API/UserService";
import Modal from "./UI/Modal/Modal";
import OrderDetails from "./OrderDetails";
import {useTranslation} from "react-i18next";

const HistoryTable = () => {
    const [booking, setBooking] = useState([]);
    const [modal, setModal] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState({
        orderId: 1,
        orderDate: "",
        pharmacyTitle: "",
        medcList: [],
        status: "",
        totalPrice: 0.00
    });
    const [fetchHistory, isLoading, errorMedc] = useFetching(async () => {
        let response = await UserService.getHistory(userId);
       setBooking(response); 
    });
    const {t, i18n} = useTranslation();
    useEffect(() => {
        fetchHistory();
    }, []);

    function getIdFromJwt (token) {
        var Buffer = require('buffer/').Buffer;
        let base64Url = token.split('.')[1]; // token you get
        let base64 = base64Url.replace('-', '+').replace('_', '/');
        let decodedData = JSON.parse(Buffer.from(base64, 'base64').toString('binary'));
        return decodedData.id;
    }
    let userId = getIdFromJwt(sessionStorage.getItem("token"));

    function showOrder(booking){
        setSelectedOrder(booking);
        setModal(true);
    }
    
    return (
        <div className="booking">
            <table  className="historyTable">
                <thead>
                    <tr>
                        <th>
                            {t("manageOrdersNumber")}
                        </th>
                        <th>
                            {t("manageOrdersDate")}
                        </th>
                        <th>
                            {t("manageOrdersPharm")}
                        </th>
                        <th>
                            {t("manageOrdersStatus")}
                        </th>
                        <th>
                            {t("manageOrdersPrice")}
                        </th>
                    </tr>
                </thead>
                <tbody>
                {booking.map(book => <HistoryTableRow booking={book} showOrder={showOrder}/>)}
                </tbody>
            </table>
            <Modal visible={modal} setVisible={setModal}>
                <OrderDetails booking={selectedOrder}/>
            </Modal>
        </div>
    );
};

export default HistoryTable;