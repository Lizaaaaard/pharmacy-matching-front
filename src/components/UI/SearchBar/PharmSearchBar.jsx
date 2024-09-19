import React, {useEffect, useState} from 'react';
import {useFetching} from "../../../hooks/useFetching";
import PharmsService from "../../../API/PharmsService";
import {useTranslation} from "react-i18next";

const PharmSearchBar = () => {
    const [pharm, setPharm] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [fetchPharms, isLoading, errorUsers] = useFetching(async () => {
        let response = await PharmsService.getAll();
        setPharm(response.Name);
    });
    const {t, i18n} = useTranslation();

    useEffect(()=>{
        fetchPharms()
    }, [])

    const handleFilter = (event) => {
        const searchWord = event.target.value
        const newFilter = pharm.filter((value) =>{
            return value.toLowerCase().includes(searchWord.toLowerCase());
        });
        if(searchWord === ""){
            setFilteredData([]);
        }
        else{
            setFilteredData(newFilter);
        }
    }
    const inputWithPharms = (event) =>{
        setFilteredData([]);
    }

    return (
        <div className="searchPharm" onMouseLeave={inputWithPharms}>
            <div className="searchInputs">
                <input type="text" placeholder={t("manageOrdersPharm")} onChange={handleFilter}/>
            </div>
            {filteredData.length != 0 && (
                <div className="dataResults">
                    {filteredData.slice(0,10).map((u) => (
                        <a href="#" className="dataItem">
                            <p>{u}</p>
                        </a>
                    ))}
                </div> )
            }

        </div>
    );
};

export default PharmSearchBar;