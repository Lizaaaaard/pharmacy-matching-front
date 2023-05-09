import React, {useEffect, useState} from 'react';
import {useFetching} from "../hooks/useFetching";
import PharmsService from "../API/PharmsService";
import PharmItem from "./PharmItem";
import {getPagesArray} from "../utils/pages";

const PharmsList = () => {
    const [pagePharm, setPagePharm] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(8);
    const [page, setPage] = useState(1);
    const [pharms, setPharms] = useState([]);
    const [pagesArray, setPagesArray] = useState([]);
    const [fetchPharms, isLoading, errorMedc] = useFetching(async () => {
        let response = await PharmsService.getAll(limit, page);
        setPharms(response);
    });

    useEffect(() => {
        fetchPharms()
    }, []);

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
    }, [page , pharms]);
    
    function changePage (p) {
        setPage(p);
    }
    
    return (
        <div>
            <table className="pharmaciesTable">
                <thead>
                <tr>
                    <th className="phHeaderName pharmaciesHeader">
                        Pharmacy Name
                    </th>
                    <th className="phHeaderAddress pharmaciesHeader">
                        Address
                    </th>
                    <th className="phHeaderWH pharmaciesHeader">
                        Working Hours
                    </th>
                    <th className="phHeaderPhNum pharmaciesHeader">
                        Phone Number
                    </th>
                </tr>
                </thead>
                <tbody>
                {pagePharm.map(ph => <PharmItem pharms={ph}/>)}
                </tbody>
            </table>
            <div className="paggination">
                {pagesArray.map(
                    function (p){
                        return (p === page)
                            ? <button className="buttonHovering selectedButton" onClick={() => changePage(p)}>{p}</button>
                            : <button className="buttonHovering" onClick={() => changePage(p)}>{p}</button>
                    })}
            </div>
        </div>
    );
};

export default PharmsList;