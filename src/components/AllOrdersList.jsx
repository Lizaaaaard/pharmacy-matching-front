import React, {useEffect, useState} from 'react';
import HistoryTableRow from "./HistoryTableRow";
import Modal from "./UI/Modal/Modal";
import OrderDetails from "./OrderDetails";
import {useFetching} from "../hooks/useFetching";
import UserService from "../API/UserService";
import {Buffer} from "buffer";
import OrderListRow from "./OrderListRow";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import moment from "moment/moment";
import {getPagesArray} from "../utils/pages";
import BookingService from "../API/BookingService";
import {useTranslation} from "react-i18next";

const AllOrdersList = () => {
    const [booking, setBooking] = useState([]);
    const [wasFiltered, setWasFiltered] = useState(0);
    const [pageOrder, setPageOrder] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [pagesArray, setPagesArray] = useState([]);
    const [updatedOrderId, setUpdatedOrderId] = useState();
    const {t, i18n} = useTranslation();

    useEffect(() => {
        let newTotalPages = Math.ceil(booking.length / 10);
        setTotalPages(newTotalPages);
        setPagesArray(getPagesArray(newTotalPages));
        setPage(1);
    }, [booking]);

    useEffect(() => {
        let pOrder = [];
        for (let i = (page - 1) * limit; i < page * limit && i < booking.length; i++) {
            pOrder.push(booking[i]);
        }
        setPageOrder(pOrder);
    }, [page, booking, wasFiltered]);
    
    const onDownloadPDF = () => {
        const doc = new jsPDF()
        autoTable(doc, { html: '#my-table' })

        doc.text("All users orders", 15, 10);

        const resultList = [];

        for (const row of booking) {
            resultList.push([row.orderId, row.userId, moment(row.orderDate).format("YYYY/MM/DD kk:mm"), row.pharmacyTitle, row.status, row.totalPrice]);
        }

        autoTable(doc, {
            head: [['Order number', 'User', 'Date', 'Pharmacy', 'Title', 'Total price']],
            body: resultList,
        })
        doc.save('users-orders.pdf')
    }

    const onDownloadJSON = () => {
        const data = JSON.stringify(booking);
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'all-users-orders.json';
        link.click();
    }

    const [modal, setModal] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState({
        orderId: 1,
        orderDate: "",
        pharmacyTitle: "",
        medcList: [],
        status: "",
        totalPrice: 0.00
    });
    
    function getIdFromJwt (token) {
        var Buffer = require('buffer/').Buffer;
        let base64Url = token.split('.')[1]; // token you get
        let base64 = base64Url.replace('-', '+').replace('_', '/');
        let decodedData = JSON.parse(Buffer.from(base64, 'base64').toString('binary'));
        return decodedData.id;
    }
    let managerId = getIdFromJwt(sessionStorage.getItem("token"));
    
    const [fetchHistory, isLoading, errorMedc] = useFetching(async () => {
        let response = await UserService.getUsersHistoryByPharmacy(managerId);
        setBooking(response);
    });

    useEffect(() => {
        fetchHistory();
    }, [updatedOrderId]);
    


    function showOrder(booking){
        setSelectedOrder(booking);
        setModal(true);
    }

    function changePage(p) {
        setPage(p);
    }

    async function approveOrder(orderId){
        await BookingService.changeStatus(orderId);
        setUpdatedOrderId(orderId);
    }

    function sortByOrderNumber() {
        let sortedBooking = booking.sort((a, b) => a.orderId - b.orderId);
        setBooking(sortedBooking);
        setWasFiltered(wasFiltered + 1);
    }

    function sortByDate() {
        let sortedBooking = booking.sort((a, b) => a.orderDate.localeCompare(b.orderDate));
        setBooking(sortedBooking);
        setWasFiltered(wasFiltered + 1);
    }

    function sortByUser() {
        let sortedBooking = booking.sort((a, b) => a.userId - b.userId);
        setBooking(sortedBooking);
        setWasFiltered(wasFiltered + 1);
    }

    function sortByPharmacy() {
        let sortedBooking = booking.sort((a, b) => a.pharmacyTitle.localeCompare(b.pharmacyTitle));
        setBooking(sortedBooking);
        setWasFiltered(wasFiltered + 1);
    }

    function sortByStatus() {
        let sortedBooking = booking.sort((a, b) => a.status.localeCompare(b.status));
        setBooking(sortedBooking);
        setWasFiltered(wasFiltered + 1);
    }

    function sortByTotalPrice() {
        let sortedBooking = booking.sort((a, b) => a.totalPrice - b.totalPrice);
        setBooking(sortedBooking);
        setWasFiltered(wasFiltered + 1);
    }
    
    return (
        <div className="orderList">
            <div className='tableWrapper'>
            <table className="orderListTable">
                <thead>
                <tr>
                    <th onClick={sortByOrderNumber}>
                        {t("manageOrdersNumber")}
                    </th>
                    <th onClick={sortByUser}>
                        {t("manageOrdersUser")}
                    </th>
                    <th onClick={sortByDate}>
                        {t("manageOrdersDate")}
                    </th>
                    <th onClick={sortByPharmacy}>
                        {t("manageOrdersPharm")}
                    </th>
                    <th onClick={sortByStatus}>
                        {t("manageOrdersStatus")}
                    </th>
                    <th onClick={sortByTotalPrice}>
                        {t("manageOrdersPrice")}
                    </th>
                    <th>
                        
                    </th>
                </tr>
                </thead>
                <tbody>
                {pageOrder.map(book => <OrderListRow
                    setBooking={setBooking}
                    booking={book}
                    showOrder={showOrder}
                    approveOrder={approveOrder}
                />)}
                </tbody>
            </table>
            </div>
            <div className="underTableBtns">
                <div className="emptySpace newEmpty"></div>
                <div className="paggination">
                    {pagesArray.map(
                        function (p) {
                            return (p === page)
                                ? <button className="buttonHovering selectedButton"
                                          onClick={() => changePage(p)}>{p}</button>
                                : <button className="buttonHovering" onClick={() => changePage(p)}>{p}</button>
                        })}
                </div>
                <div className="downloadBtns">
                    <button onClick={onDownloadPDF}>{t("downloadPDF")}</button>
                    <button className="jsonBtn" onClick={onDownloadJSON}>{t("downloadJSON")}</button>
                </div>
            </div>
            <Modal visible={modal} setVisible={setModal}>
                <OrderDetails booking={selectedOrder}/>
            </Modal>
        </div>
    );
};

export default AllOrdersList;