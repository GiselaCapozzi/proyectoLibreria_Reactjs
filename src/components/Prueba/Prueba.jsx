import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './Prueba.module.css';
import CardBook from '../../container/CardBook/CardBook';

const Prueba = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(18);

  useEffect(() => {
    fetchBooks();
  }, [currentPage]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=${porPagina}&startIndex=${currentPage}&key=AIzaSyAJlKP9GASA1rY442XsavTNlKXGcNnNR-c`
      );
      setBooks(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  console.log(books)
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className={`${style.container}`}>
    <input
        className={` form-control ${style.input_search}`}
        type='search'
        onChange={handleChange}
        defaultValue={search}
      />
      <button
          type='submit'
          className={`btn btn-success`}
          onClick={fetchBooks}
        >Buscar</button>
      <h1>Books</h1>
      <CardBook
        books={books}
        key={books.id}
        pagina={pagina}
        porPagina={porPagina}
      />
      <button onClick={handlePreviousPage}>Previous</button>
      <button onClick={handleNextPage}>Next</button>
      <div className={`${style.espacio}`}>
      </div>
    </div>
  );
};

export default Prueba;
