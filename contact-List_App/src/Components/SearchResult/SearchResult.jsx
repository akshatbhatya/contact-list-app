import React from 'react'

function SearchResult({filterData}) {
  return (
    <div>
        <div className="filtereddataShow">
                <div className="name">
                    <p>{filterData.name}</p>
                </div>
                <div className="email">
                    <p>{filterData.email}</p>
                </div>
                <div className="email">
                    <p>{filterData.number}</p>
                </div>
            </div>
      
    </div>
  )
}

export default SearchResult
