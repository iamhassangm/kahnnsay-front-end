import './App.css';
import axios from 'axios';
import { useEffect, useState, React } from 'react';

const APP_URL = "http://localhost:3000/api/v1/";

function getAPIData() {
  return axios.get(`${APP_URL}/books`).then(resp => resp.data)
}


function SearchResults(props) {
  return (
        <div>
        {props.results.map(book => {
          return (
          <div>
            <h2>Title: {book.title}</h2>
            <h3>ISBN: {book.isbn}</h3>
          </div>
          );
        })}
       </div>
  );
}


function SearchForm(props) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  
  const searchBooks = (q) => {
    const response = axios.post(`${APP_URL}/search_books?query=${q}`)
    .then(rsp =>  {  setResults(rsp.data.query) } )
    .catch((e) => console.log(e));
  }

  return (
    <div>
      <input onChange={(e) => setQuery(e.target.value)}></input>
    <button onClick={() => searchBooks(query)}>Search</button>
    <SearchResults results={results} />
    </div>
  )
}


function App() {
  const [books, setBooks] = useState([]);
  // Index page not implemented yet!
  // So no need to call index endpoint
  // useEffect(() => {
  //   let mounted = true;
  //   getAPIData().then(items => {
  //     if (mounted) {
  //       setBooks(items);
  //     }
  //   });
  //   return () => (mounted = false);
  // }, []);
  //
  return (
    
    <div className="App">
    <h1>Search. Books.</h1>
        <SearchForm />
    </div>
  );
}

export default App;
