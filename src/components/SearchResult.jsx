import React from 'react'
import "./SearchResult.css";

export const SearchResult = (name) => {
  return (
    <div className='search-result' onClick={() => alert(`You clicked ${name.result}`)}>{name.result}</div>
  )
}
