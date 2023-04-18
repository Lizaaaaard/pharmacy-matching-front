import React, {useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';

const SearchInput = ({inputValue, setInputValue}) => {
    const navigate = useNavigate();
    function handleClick() {
        navigate('/medicines?searchValue=' + inputValue);
    }
    
    return (
        <div className="searchContainer">
            <input 
                type="text"
                placeholder="Input medicine title"
                id="inputText"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            <button onClick={handleClick}>Search</button>
        </div>
    );
};

export default SearchInput;