import React, { useState } from "react";

import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

export const SearchBar = ({setResults}) => {
  const [input, setInput] = useState("");

  //request each time user puts input
  const fetchData = (value) => {
    //filtering here on the front-side, normally done in backend
    //makes request to api, .then used as we wait for data and then convert to json format
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        //filter json results
        const results = json.filter((user) => {
            return value && user && user.name && user.name.toLowerCase().includes(value)
        })
        setResults(results) 
      });
  };

  //when user inputs
  const change = (value) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Search..."
        value={input}
        onChange={(e) => change(e.target.value)}
      />
    </div>
  );
};
