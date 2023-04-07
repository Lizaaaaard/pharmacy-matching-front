import React, {useState} from "react";
import '../styles/App.css';
import MedcList from "../components/MedcList";
import SearchTitle from "../components/SearchTitle";
import Filter from "../components/Filter";


function Medicines() {
    /*const [medc, setMedc] = useState([
        {
            id: 1,
            title: 'tabletki1',
            producer: {company: 'durashka prod', country: 'USA'},
            body:'tabletki ogon',
            doses: [
                {id: 1, package:'tablets 50mg in pack no.30', minPrice: 25.99, maxPrice: 38.50, availability:20},
                {id: 2, package:'tablets 150mg in pack no.60', minPrice: 15, maxPrice: 16.50, availability:2}],
            needPrescription:true
        },
        {
            id: 2,
            title: 'Tabletki2',
            producer: {company: 'durashka prod', country: 'India'},
            body:'tabletki ogon',
            doses: [
                {id: 1, package:'tablets 50mg in pack no.30', minPrice: 25.99, maxPrice: 38.50, availability:0},
                {id: 2, package:'tablets 150mg in pack no.60', minPrice: 15, maxPrice: 15, availability:1}],
            needPrescription:false
        },
        {
            id: 3,
            title: 'tabletka3',
            producer: {company: 'durashka prod', country: 'Germany'},
            body:'tabletki ogon',
            doses: [
                {id: 1, package:'tablets 50mg in pack no.30', minPrice: 25.99, maxPrice: 38.50, availability:20},
                {id: 2, package:'tablets 150mg in pack no.60', minPrice: 15, maxPrice: 15, availability:2}],
            needPrescription:false
        }
    ]);*/
    const [searchValue, setSearchValue] = useState('');

    return (
        <div className="App">
            <div className="SearchPage">
                <div className="elements">
                    <Filter/>
                </div>
                <div className="elements">
                    <SearchTitle search={searchValue}/>
                    <MedcList search={searchValue}/>
                </div>
            </div>
        </div>
    );
}

export default Medicines;