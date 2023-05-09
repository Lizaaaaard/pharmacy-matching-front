import React, {useContext, useEffect, useState} from "react";
import '../styles/App.css';
import MedcList from "../components/MedcList";
import SearchTitle from "../components/SearchTitle";
import Filter from "../components/Filter";
import {useLocation} from "react-router-dom";
import $ from 'jquery';
import {SearchContext} from "../context";


function Medicines() {   
    const{searchValue, setSearchValue} = useContext(SearchContext);
    
    return (
        <MedcList search={searchValue}/>
    );
}

export default Medicines;