import React from 'react';

export default function Book(props) {
  const bookDetails = props.details;
  bookDetails.locations = [1];
  return(
    <div id={bookDetails.id} class="book">
      <h2>Title: {bookDetails.title}</h2>
      <h3>ISBN: {bookDetails.isbn}</h3>
      <h3>Author: {bookDetails.author}</h3>
      <div>
        Available at: 
        {bookDetails.locations.map((loc) => {
           <li>{loc}</li>
        })}
   
    </div>
    </div>
  )
}