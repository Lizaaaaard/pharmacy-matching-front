import React, {useEffect, useState} from 'react';
import MedcItem from "./MedcItem";
import MedcService from "../API/MedcService";
import {useFetching} from "../hooks/useFetching";
import {getPageCount, getPagesArray} from "../utils/pages";
import $ from "jquery";
import Filter from "./Filter";
import SearchTitle from "./SearchTitle";

const MedcList = ({search}) => {
    const [medc, setMedc] = useState([]);
    const [filteredMedc, setFilteredMedc] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    let pagesArray = getPagesArray(totalPages);
    
    const [fetchMedc, isLoading, errorMedc] = useFetching(async () => {
        let response = await MedcService.getAll(limit, page);
        const totalCount = await MedcService.getTotalCount();
        setMedc([...response.data]);
        setFilteredMedc([...response.data]);
        setTotalPages(getPageCount(totalCount.data, limit));
    });

    useEffect(() => {
        fetchMedc();
    }, []);

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
    
    return (
        
        <div>
            <div className="SearchPage">
                <div className="elements">
                    <Filter filterMedc={filterMedc}/>
                </div>
                <div className="elements">
                    <SearchTitle search={search}/>
                    <div className="medcArea">
                    { filteredMedc.length === 0 
                        ? <div>
                            <h1 className="noMedcMsg">
                            There are no medicines satisfying such criterias.
                            </h1>
                        </div> 
                        : <div>
                            <div>
                                {filteredMedc.filter(med => med.title.toLowerCase().includes(search.toLowerCase()))
                                    .map(med => <MedcItem medc={med} key={med.id}/>
                                    )}
                            </div>
                            <div className="paggination">
                                {pagesArray.map(p=>
                                    <button>{p}</button>)}
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MedcList;