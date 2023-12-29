import React, { useState } from 'react';
import "./SearchBar.css";

function SearchBar({ contacts }) {
    const [filterData, setFilterData] = useState([]);
    const [searchBar, setSearchBar] = useState("");

    const [visibility, setVisibility] = useState(false)

    const handleFind = (e) => {
        e.preventDefault();
        setVisibility(!visibility)

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

            {
                visibility ? <> 
                <div className='filter_Content-section'>
                    <div className="filtereddataShow">
                        {filterData.map((contact) => (
                            <div key={contact.id}>
                                <div className="name">
                                    <p>Name : {contact.name}</p>
                                </div>
                                <div className="email">
                                    <p>Email : {contact.email}</p>
                                </div>
                                <div className="number">
                                    <p> Contact : {contact.number}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                </> : null
            }
        </div>
    );
}

export default SearchBar;
