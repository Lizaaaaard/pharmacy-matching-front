import React, {useState} from "react";
import './styles/App.css';
import MedcItem from "./components/MedcItem";
import MedcList from "./components/MedcList";
import SearchTitle from "./components/SearchTitle";

function App() {
    const [medc, setMedc] = useState([
        {
            id: 1,
            title: 'tabletki1',
            producer: {company: 'durashka prod', country: 'USA'},
            body:'tabletki ogon',
            doses: [
                {package:'tablets 50mg in pack no.30', minPrice: 25.99, maxPrice: 38.50, availability:20},
                {package:'tablets 150mg in pack no.60', minPrice: 15, maxPrice: 16.50, availability:2}],
            needPrescription:true
        },
        {
            id: 2,
            title: 'Tabletki2',
            producer: {company: 'durashka prod', country: 'India'},
            body:'tabletki ogon',
            doses: [
                {package:'tablets 50mg in pack no.30', minPrice: 25.99, maxPrice: 38.50, availability:0},
                {package:'tablets 150mg in pack no.60', minPrice: 15, maxPrice: 15, availability:1}],
            needPrescription:false
        },
        {
            id: 3,
            title: 'tabletka3',
            producer: {company: 'durashka prod', country: 'Germany'},
            body:'tabletki ogon',
            doses: [
                {package:'tablets 50mg in pack no.30', minPrice: 25.99, maxPrice: 38.50, availability:20},
                {package:'tablets 150mg in pack no.60', minPrice: 15, maxPrice: 15, availability:2}],
            needPrescription:false
        }
    ]);
    const [searchValue, setSearchValue] = useState('tabletki');
  
  return (
    <div className="App">
        <div className="SearchPage">
            <SearchTitle search={searchValue}/>
            <MedcList medc={medc} search={searchValue}/>
        </div>
    </div>
  );
}

export default App;
