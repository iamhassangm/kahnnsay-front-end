import React from 'react';
import Book from './Book'

export default function BookList(props) {
  return (
    <div>
        {props.books.map(id => {
          return (
            <Book id={id} key={id}/>
          );
        })}
    </div>
      );
}