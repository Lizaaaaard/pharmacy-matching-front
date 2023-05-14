import React, {useContext, useState} from 'react';
import SearchInput from "../components/SearchInput";
import Description from "../components/Description";
import {AuthContext, CartContext, SearchContext, UserRoleContext} from "../context";
import {Buffer} from "buffer";
//import './styles/App.css';

const Search = () =>{
    const {searchValue, setSearchValue} = useContext(SearchContext);
    return (
        <div className="searchWrap">
            <Description/>
            <SearchInput inputValue={searchValue} setInputValue={setSearchValue}/>
        </div>
    );
};

export default Search;