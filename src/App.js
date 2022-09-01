import './App.css';
import axios from 'axios';
import { useEffect, useState, React } from 'react';

const APP_URL = "http://localhost:3000/api/v1/";

function getAPIData() {
  return axios.get(`${APP_URL}/books`).then(resp => resp.data)
}

function postAPIData(q) {
  axios.post(`${APP_URL}/search_books?query=${q}`)
    .then(rsp =>  { return rsp.data.query } )
    .catch((e) => console.log(e));
}

function SearchResults(props) {
    {props.results.map(book => {
      return (
        <div>
          <h2>{book.title}</h2>
          <h3>{book.isbn}</h3>
        </div>
      )
    })}
}

// Not Working
// Search results are not populating
// I am having issue dealing with promises 
function SearchForm() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  
  const searchBooks = async () => {
    const response = await postAPIData(query);
    setResults(response);
  }
  
  useEffect(() => {
    searchBooks(query);
  }, []);
  
   useEffect(() => {
     if (results) {
       searchBooks(query);
       console.log("RUN!")
     }
  }, [results]);
  
  return (
    <div>
      <input onChange={(e) => setQuery(e.target.value)}></input>
    <button>Search</button>
    {console.log(results)}
    </div>
  )
}


function App() {
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    let mounted = true;
    getAPIData().then(items => {
      if (mounted) {
        setBooks(items);
      }
    });
    return () => (mounted = false);
  }, []);
  
  return (
    
    <div className="App">
    <h1>Search. Books.</h1>
        <SearchForm />
        <SearchResults results={books} />
    </div>
  );
}

export default App;
