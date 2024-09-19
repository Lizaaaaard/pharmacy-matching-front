import React, {useContext, useEffect, useState} from 'react';
import {useFetching} from "../hooks/useFetching";
import PharmsService from "../API/PharmsService";
import PharmItem from "./PharmItem";
import {getPagesArray} from "../utils/pages";
import NewPharmModal from "./UI/Modal/NewPharmModal";
import AddPharmacyForm from "./AddPharmacyForm";
import {UserRoleContext} from "../context";
import {useTranslation} from "react-i18next";

const PharmsList = () => {
    const {userRole, setUserRole} = useContext(UserRoleContext);
    const [checkCounter, setCheckCounter] = useState(0);
    const [modal, setModal] = useState(false);
    const [pagePharm, setPagePharm] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(8);
    const [page, setPage] = useState(1);
    const [pharms, setPharms] = useState([]);
    const {t, i18n} = useTranslation();
    const [pagesArray, setPagesArray] = useState([]);
    const [fetchPharms, isLoading, errorMedc] = useFetching(async () => {
        let response = await PharmsService.getAll(limit, page);
        setPharms(response);
    });

    useEffect(() => {
        fetchPharms()
    }, [checkCounter]);

    useEffect(() => {
        let newTotalPages = Math.ceil(pharms.length / 8);
        setTotalPages(newTotalPages);
        setPagesArray(getPagesArray(newTotalPages));
        setPage(1);
    }, [pharms]);

    useEffect(() => {
        let pPharm = [];
        for (let i = (page - 1) * limit; i < page * limit && i < pharms.length; i++) {
            pPharm.push(pharms[i]);
        }
        setPagePharm(pPharm);
    }, [page, pharms]);

    function changePage(p) {
        setPage(p);
    }

    function addPharmacy(pharmacy) {
        setModal(false);
        PharmsService.addPharmacy(pharmacy).then(()=> setCheckCounter(checkCounter + 1));
    }
    
    return (
        <div>
            <table className="pharmaciesTable">
                <thead>
                <tr>
                    <th className="phHeaderName pharmaciesHeader">
                        {t("tablePharmName")}
                    </th>
                    <th className="phHeaderAddress pharmaciesHeader">
                        {t("tablePharmAddress")}
                    </th>
                    <th className="phHeaderWH pharmaciesHeader">
                        {t("tablePharmWH")}
                    </th>
                    <th className="phHeaderPhNum pharmaciesHeader">
                        {t("tablePharmPN")}
                    </th>
                </tr>
                </thead>
                <tbody>
                {pagePharm.map(ph => <PharmItem pharms={ph}/>)}
                </tbody>
            </table>
            <div className="underPharmTable">
                <div className="emptySpace"></div>
                <div className="paggination">
                    {pagesArray.map(
                        function (p) {
                            return (p === page)
                                ? <button className="buttonHovering selectedButton"
                                          onClick={() => changePage(p)}>{p}</button>
                                : <button className="buttonHovering" onClick={() => changePage(p)}>{p}</button>
                        })}
                </div>
                <div>
                    {
                        userRole === "Admin"
                            ?
                            <div className="addPharmacyBtn">
                                <button onClick={() => setModal(true)}>{t("addPharmBtn")}</button>
                                <NewPharmModal visible={modal} setVisible={setModal}>
                                    <AddPharmacyForm addPharmacy={addPharmacy}/>
                                </NewPharmModal>
                            </div>
                            :
                            <div></div>
                    }
                </div>
            </div>
        </div>
    );
};

export default PharmsList;