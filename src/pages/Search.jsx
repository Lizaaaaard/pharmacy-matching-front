import React, {useState} from 'react';
import SearchInput from "../components/SearchInput";
import Description from "../components/Description";
//import './styles/App.css';

const Search = () =>{
    const [inputValue, setInputValue] = useState('');
    
    return (
        <div className="searchWrap">
            <Description/>
            <SearchInput inputValue={inputValue} setInputValue={setInputValue}/>
        </div>
    );
};

export default Search;