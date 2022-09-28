import React, { useEffect, useState } from 'react';
import LibraryCard from './LibraryCard';
import BookList from './BookList'
import axios from 'axios';

export default function LibraryPage(props) {
  const [books, setBooks] = useState([]);
  
  const API_URL = "http://localhost:3000/api/v1";

  const getBooks = () => {
    axios.get(`${API_URL}/libraries/${props.id}/book_ids`)
    .then((resp) => { setBooks(resp.data) })
    .catch((e) => console.log("Error from Book comp", e))
  }
  
  
  useEffect(() => {
    getBooks()
    // setBooks([{id: 1}, {id: 1}, {id: 1}])
  },[])
  
  return (
    <div>
    <LibraryCard id={props.id} key={props.id}/>
    <BookList books={books}/>
    </div>
  )
}