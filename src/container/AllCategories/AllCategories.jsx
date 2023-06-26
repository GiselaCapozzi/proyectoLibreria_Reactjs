import { useState, useEffect } from 'react';
import { api_url } from '../../data/api';
import styles from './AllCategories.module.css';
import axios from 'axios';
import CardBook from '../CardBook/CardBook';

const AllCategories = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('https://www.googleapis.com/books/v1/volumes?q=printType=all')
      .then(res => setBooks(res.data.items))
  }, []);

  console.log(books.map(b => (
    console.log(b.volumeInfo.title)
  )))

  return (
    <div className={`${styles.container}`}>
      { books &&
        books.map(book => (
          <div key={book.id}>
            <CardBook 
            title={book.volumeInfo.title}
            image={book.volumeInfo.imageLinks.thumbnail}
            />
          </div>
        ))
      }
    </div>
  )
}

export default AllCategories