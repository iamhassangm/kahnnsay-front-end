import { React, useEffect, useState } from 'react';
import axios from 'axios';
import BookList from './BookList.js';

export default function SearchResults(props) {
  return <BookList books={props.results} />
}