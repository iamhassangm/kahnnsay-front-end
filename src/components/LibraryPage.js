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
      <div className="flex flex-col p-5 bg-black text-white">
      <LibraryCard id={props.id} key={props.id}/>
      <button className="p-5 border border-2 border-white hover:border-white/50 hover:text-white/50 mt-3" onClick={() => loadBooks()}>Show All Books</button>
      </div>
    
      {showBooks && <BookList books={books}/>}
    </div>
  )
}