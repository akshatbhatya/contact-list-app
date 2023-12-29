import React, { useState } from 'react';
import "./SearchBar.css";
import SearchResult from '../SearchResult/SearchResult';

function SearchBar({ contacts }) {
    const [filterData, setFilterData] = useState([]);
    const [searchBar, setSearchBar] = useState("");

    const handleFind = (e) => {
        e.preventDefault();

        const filteredData = contacts.filter((contact) =>
            contact.name === searchBar
        );

        setFilterData(filteredData);
    };

    return (
        <div>
            <div className="searchbar-inputBox">
                <input
                    type="text"
                    onChange={(e) => setSearchBar(e.currentTarget.value)}
                />
                <button type='submit' onClick={handleFind}>Find</button>
            </div>

           

            <div>
                <div className="filtereddataShow">
                    {filterData.map((contact) => (
                        <div key={contact.id}>
                            <div className="name">
                                <p>{contact.name}</p>
                            </div>
                            <div className="email">
                                <p>{contact.email}</p>
                            </div>
                            <div className="number">
                                <p>{contact.number}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
