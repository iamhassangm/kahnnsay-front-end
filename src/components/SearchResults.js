import { React, useEffect, useState } from 'react';
import axios from 'axios';
import Book from './Book.js';

export default function SearchResults(props) {
  return (
        <div>
        {props.results.map(book => {
          return (
            <Book id={book.id} key={book.id}/>
          );
        })}
       </div>
  );
}