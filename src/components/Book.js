import { useEffect, useState, React } from 'react';
import axios from 'axios';

export default function Book(props) {

  const API_URL = "http://localhost:3000/api/v1";
  const [bookDetails, setBookDetails] = useState(null);

  const getBookDetails = () => {
    axios.get(`${API_URL}/books/${props.id}`)
    .then((resp) => { setBookDetails(resp.data) })
    .catch((e) => console.log("Error from Book comp", e))
  }

  useEffect(() => {
    getBookDetails();
  }, []);
  
  
  if (!bookDetails) {
    return null;
  }
  
  return(
    
    <div id={bookDetails.id} className="book">
      <h2>Title: {bookDetails.title}</h2>
      <h3>ISBN: {bookDetails.isbn}</h3>
      <h3>Author: {bookDetails.author}</h3>
      <div>
        Available at: 
        <ul>
        {bookDetails.libraries.map((loc) => {
           return <li>{loc}</li>
        })}
        </ul>
   
    </div>
    </div>
  )
}