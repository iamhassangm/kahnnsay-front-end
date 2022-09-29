import React from 'react';
import Book from './Book'

export default function BookList(props) {
  return (
    <div class="mx-3 grid grid-cols-4 gap-1 md:grid-cols-3">
        {props.books.map(id => {
          return (
            <Book id={id} key={id}/>
          );
        })}
    </div>
      );
}