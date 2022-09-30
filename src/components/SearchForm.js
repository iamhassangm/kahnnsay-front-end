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
    <div>
    <div class="bg-black py-4 text-white">
      <input class="shadow appearance-none border rounded rounded-r-none py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        onChange={(e) => setQuery(e.target.value)}></input>
      <button class="rounded rounded-l-none text-sm font-semibold leading-6  py-2 px-3 bg-sky-500 text-white cursor-auto shadow-sm" 
        onClick={() => searchBooks(query)}>Search</button>
    </div>
    <SearchResults results={results} />
    </div>
  )
}