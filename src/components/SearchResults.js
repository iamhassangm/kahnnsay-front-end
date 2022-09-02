import React from 'react';
import Book from './Book.js';

export default function SearchResults(props) {
  return (
        <div>
        {props.results.map(book => {
          return (
            <Book details={book} />
          );
        })}
       </div>
  );
}