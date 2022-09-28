import React, { useEffect, useState } from 'react';
import LibraryCard from './LibraryCard';
import BookList from './BookList'
import axios from 'axios';

export default function LibraryPage(props) {
  const [books, setBooks] = useState([]);
  
  const API_URL = "http://localhost:3000/api/v1";

  const getBooks = () => {
    axios.get(`${API_URL}/library/${props.id}/books`)
    .then((resp) => { setBooks(resp.data) })
    .catch((e) => console.log("Error from Book comp", e))
  }
  
  
  useEffect(() => {
    getBooks();
  },[])
  
  return (
    <div>
    <LibraryCard id={props.id} key={props.id}/>
    <BookList books={books}/>
    </div>
  )
}