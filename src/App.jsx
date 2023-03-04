import './App.css'
import { SearchBar } from './components/searchbar'
import { SearchResults } from './components/SearchResults';
import { useState } from 'react';

function App() {
  //state that holds an array of objects
  const [results, setResults] = useState([]);

  //function that updates the state
  // const updateResult = (newR) => {
  //   setResults(newR);
  // }
  return (
    <div className="App">
      <div className = "search-bar-container">
        {/* call searchresults component, and send state that needs to be changed */}
        {/* also can use setResults = {setResults} */}
        {/* <SearchBar updateResult = {updateResult}/> */}
        <SearchBar setResults = {setResults}/>
        <SearchResults results = {results}/>
      </div>
    </div>
  )
}

export default App
