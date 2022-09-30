import React, { useEffect, useState, useContext } from 'react';
import { pagesMapping, RoutingContext } from '../context/Routing'
import axios from 'axios';
import LibraryCard from './LibraryCard.js';

export default function Book(props) {
  const { setPage, setPayload } = useContext(RoutingContext)
  
  const API_URL = "http://localhost:3000/api/v1";
  const [bookDetails, setBookDetails] = useState(null);

  const getBookDetails = () => {
    axios.get(`${API_URL}/books/${props.id}`)
    .then((resp) => { setBookDetails(resp.data) })
    .catch((e) => console.log("Error from Book comp", e))
  }
  
  const navigateToLibrary = (id) => {
    setPage(pagesMapping.library)
    setPayload({id: id})
  }
  useEffect(() => {
    getBookDetails();
  }, []);
  
  
  if (!bookDetails) {
    return null;
  }

  return(
    <div id={bookDetails.id}  className="text-left m-1 block rounded-md  bg-slate-50/80 border px-3 py-5 text-slate-800 hover:shadow-md hover:bg-slate-100">
      <h3 className="mb-3 font-sans text-2xl font-semibold">{bookDetails.title}</h3>
      <h5 className="text-xs text-slate-500">AUTHOR</h5>
      <h5 className="mb-2 text-base font-bold">{bookDetails.author}</h5>

      <h5 className="text-xs text-slate-500">ISBN</h5>
      <h5 className="mb-2 text-base font-bold">{bookDetails.isbn}</h5>

      <h5 className="text-xs text-slate-500">AVAILABLE AT</h5>
      <ul className="ml-5 list-disc">
        {bookDetails.libraries.map((lib) => {
           return <li className="list-item" key={lib.id}>
          <a onClick={() => navigateToLibrary(lib.id) } className="hover:text-blue-800">{lib.name}</a>
          </li>
        })}
        
      </ul>
    </div>
    
  )
}