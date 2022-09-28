import React from 'react';
import Book from './Book'

export default function BookList(props) {
  return (
    <div>
        {props.books.map(book => {
          return (
            <Book id={book.id} key={book.id}/>
          );
        })}
    </div>
      );
}