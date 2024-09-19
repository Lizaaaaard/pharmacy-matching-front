import React, {useContext, useEffect, useState} from 'react';
import MedcItem from "./MedcItem";
import MedcService from "../API/MedcService";
import {useFetching} from "../hooks/useFetching";
import {getPageCount, getPagesArray} from "../utils/pages";
import $ from "jquery";
import Filter from "./Filter";
import SearchTitle from "./SearchTitle";
import Loader from "./UI/Loader/Loader";
import {CartContext} from "../context";
import {useTranslation} from "react-i18next";

const MedcList = ({search}) => {
    const [medc, setMedc] = useState([]);
    const [pageMedc, setPageMedc] = useState([]);
    const [filteredMedc, setFilteredMedc] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(5);
    const [pagesArray, setPagesArray] = useState([]);
    
    const [fetchMedc, isLoading, errorMedc] = useFetching(async () => {
            let response = await MedcService.getAll();
            setMedc(response);
            setFilteredMedc(response);
    });
    const {t, i18n} = useTranslation();

    useEffect(() => {
        fetchMedc();
    }, []);

    useEffect(() => {
        let medc = filterMedcByInputSearch(filteredMedc);
        if (medc.length !== 0) {
            let newTotalPages = Math.ceil(medc.length / 5);
            setTotalPages(newTotalPages);
            setPagesArray(getPagesArray(newTotalPages));
            setPage(1);
        } else {
            setTotalPages(0);
        }
    }, [filteredMedc]);

    useEffect(() => {
        let pMedc = [];
        for (let i = (page - 1) * limit; i < page * limit && i < filteredMedc.length; i++) {
            pMedc.push(filteredMedc[i]);
        }
        setPageMedc(pMedc);
    }, [page , filteredMedc]);
    
    function filterMedc()  {
        filterMedcByForm();
    }

    function filterMedcByForm() {
        let validMedc = structuredClone(medc);
        let selectedForms = $(".releaseForm div>div>input:checked");
        if (selectedForms.length !== 0) {
            let mapped = $.map(selectedForms, function (pr, i) {
                return pr.parentElement.innerText;
            })
            validMedc = $.map(medc, function(med) {
                let newMedc = structuredClone(med);
                newMedc.doses = [];
                for (const doseKey in med.doses) {
                    let dose = med.doses[doseKey];
                    let dosePackage = dose.package.split(' ')[0];
                    if (mapped.includes(dosePackage)) {
                        newMedc.doses.push(dose);
                    }
                }
                return newMedc;
            }).filter(med => med.doses.length !== 0);
            
        }
        filterMedcByProducer(validMedc);
    }

    function filterMedcByProducer(filteredMedc) {
        let validMedc = filteredMedc;
        let selectedProducers = $(".producer div>input:checked");
        if (selectedProducers.length !== 0) {
            let mapped = $.map(selectedProducers, function (pr, i) {
                return pr.parentElement.innerText;
            })
            validMedc = filteredMedc.filter(med => mapped.includes(med.producer.country));
            setFilteredMedc(validMedc);
        }
        filterMedcInStock(validMedc);
    }

    function filterMedcInStock(filteredMedc) {
        let validMedc = filteredMedc;
        let filterButton = $('.filterDiv label input[name=inStock]')[0];
        if (filterButton.checked) {
            validMedc = $.map(filteredMedc, function (med) {
                let filteredDoses = med.doses.filter(d => d.availability > 0);
                let cloneMedc = structuredClone(med);
                cloneMedc.doses = filteredDoses;
                return cloneMedc;
            }).filter(med => med.doses.length !== 0);
        }
        filterMedcNeedPrescription(validMedc);
    }

    function filterMedcNeedPrescription(filteredMedc) {
        let validMedc = filteredMedc;
        let filterButton = $('.filterDiv label input[name=need]')[0];
        if (filterButton.checked) {
            validMedc = filteredMedc.filter(med => med.needPrescription);
        }
        setFilteredMedc(validMedc);
    }
    
    function changePage (p) {
        setPage(p);
    }
    
    function filterMedcByInputSearch(medc) {
        return medc.filter(med => med.title.toLowerCase().includes(search.toLowerCase()));
    }
    
    return (
        
        <div>
            <div className="SearchPage">
                <div className="elements">
                    <Filter filterMedc={filterMedc}/>
                </div>
                <div className="elements">
                    <SearchTitle search={search}/>
                    {
                        isLoading 
                        ? <Loader/>
                        :<div className="medcArea">
                                { pageMedc.length === 0
                                    ? <div>
                                        <h1 className="noMedcMsg">
                                            {t("noMedcByCrit")}
                                        </h1>
                                    </div>
                                    : <div>
                                        <div>
                                            {filterMedcByInputSearch(pageMedc)
                                                .map(med => <MedcItem medc={med} key={med.id}/>
                                                )}
                                        </div>
                                        <div className="paggination">
                                            {pagesArray.map(
                                            function (p){
                                                return (p === page)
                                                    ? <button className="buttonHovering selectedButton" onClick={() => changePage(p)}>{p}</button> 
                                                    : <button className="buttonHovering" onClick={() => changePage(p)}>{p}</button>
                                            })}
                                        </div>
                                    </div>}
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default MedcList;