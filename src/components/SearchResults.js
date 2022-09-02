import React from 'react';

export default function SearchResults(props) {
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