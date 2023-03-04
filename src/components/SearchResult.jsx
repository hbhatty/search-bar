import React from 'react'
import "./SearchResult.css";

export const SearchResult = (props) => {
  return (
    <div className='search-result' onClick={() => alert(`You clicked ${props.result.name}`)}>{props.result.name}</div>
  )
}
