import React, { useEffect, useState, useContext } from 'react';
import LibraryCard from './LibraryCard';
import BookList from './BookList'
import axios from 'axios';
import { pagesMapping, RoutingContext } from '../context/Routing'

export default function LibraryPage(props) {
  const { setPage } = useContext(RoutingContext);
  const [books, setBooks] = useState([]);
  const [showBooks, toggleShowBooks] = useState(false);
  
  const API_URL = "http://localhost:3000/api/v1";

  const getBooks = () => {
    axios.get(`${API_URL}/libraries/${props.id}/book_ids`)
    .then((resp) => { setBooks(resp.data) })
    .catch((e) => console.log("Error from Book comp", e))
  }
  
  const navigateToHome = () => {
    setPage(pagesMapping.home)
  }
  
  const loadBooks = () => {
    getBooks()
    toggleShowBooks(true)
  }
  
  useEffect(() => {
    toggleShowBooks(false)
  }, [props.id])
  console.log(showBooks)

  return (
    <div>
      <a onClick={() => navigateToHome() }>&#8592; Home</a>
      <LibraryCard id={props.id} key={props.id}/>
      <button onClick={() => loadBooks()}>Show All Books</button>
      {showBooks && <BookList books={books}/>}
    </div>
  )
}