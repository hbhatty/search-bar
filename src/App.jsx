import './App.css'
import { SearchBar } from './components/searchbar'
import { SearchResults } from './components/SearchResults';
import { useState } from 'react';

function App() {
  const [results, setResults] = useState([]);
  return (
    <div className="App">
      <div className = "search-bar-container">
        <SearchBar setResults = {setResults}/>
        <SearchResults results = {results}/>
      </div>
    </div>
  )
}

export default App
