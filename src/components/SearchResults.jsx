import React from "react";
import "./SearchResults.css";
import { SearchResult } from "./SearchResult";

export const SearchResults = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <SearchResult result = {result.name} key = {id}/>
      })}
    </div>
  );
};
