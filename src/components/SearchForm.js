import { useEffect, useState, React } from 'react';
import axios from 'axios';
import SearchResults from './SearchResults.js';


export default function SearchForm(props) {
  const APP_URL = "http://localhost:3000/api/v1";
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  
  const searchBooks = (q) => {
    const response = axios.post(`${APP_URL}/search_books?query=${q}`)
    .then(rsp =>  {  setResults(rsp.data) } )
    .catch((e) => console.log(e));
  }

  return (
    <div className="flex flex-col">
    <div className="bg-black py-4 text-white">
      <input className="p-3 border border-white text-black"
        onChange={(e) => setQuery(e.target.value)}></input>
      <button className="p-3 border border-white" 
        onClick={() => searchBooks(query)}>Search</button>
    </div>
    <SearchResults results={results} />
    </div>
  )
}