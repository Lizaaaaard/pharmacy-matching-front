import React from 'react';

const SearchTitle = ({search}) => {
    return (
        <div className='searchTitle'>
            <h1>Search results for "{search}":</h1>
        </div>
    );
};

export default SearchTitle;