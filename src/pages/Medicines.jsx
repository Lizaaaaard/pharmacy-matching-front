import React, {useEffect, useState} from "react";
import '../styles/App.css';
import MedcList from "../components/MedcList";
import SearchTitle from "../components/SearchTitle";
import Filter from "../components/Filter";
import {useLocation} from "react-router-dom";
import $ from 'jquery';


function Medicines() {   
    let searchValue;
    let location = useLocation();
    
    useState(() => {
        let queryParams = new URLSearchParams(location.search);
        searchValue = queryParams.get('searchValue');
    }, []);
    
    return (
        <div className="App">
            
                    <MedcList search={searchValue}/>
              
        </div>
    );
}

export default Medicines;