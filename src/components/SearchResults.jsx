import React from "react";
import "./SearchResults.css";
import { SearchResult } from "./SearchResult";

//can pass in {results}
export const SearchResults = (props) => {
  return (
    <div className="results-list">
      {props.results.map((result, id) => {
        return <SearchResult result = {result} key = {id}/>
      })}
    </div>
  );
};
