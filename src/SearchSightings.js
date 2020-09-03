import React from 'react';

function SearchSightings(props) {
    return (
        <form>
            <label>
                Search for Sightings by Organim Common Name:
            <input  value={props.searchValue} onChange={props.searchHandler} />
            </label>
        </form>
    )
}

export default SearchSightings;