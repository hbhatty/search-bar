import React, { useState } from "react";

import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

//can pass in {setResults} as well
export const SearchBar = (props) => {
  
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
        //populate setResult 
        //can do setResults(results) as well
        // props.updateResult(results)
        props.setResults(results)
        console.log(results)
      });
  };

  //when user inputs
  const change = (value) => {
    //change what user enters
    setInput(value);
    //send it in fetchdata function
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
