import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './Prueba.module.css';
import CardBook from '../../container/CardBook/CardBook';
import.meta.url;
// const CREDENCIAL_API = ;

const Prueba = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(40);

  useEffect(() => {
    fetchBooks();
  }, [currentPage]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=${porPagina}&startIndex=${currentPage}&key=${import.meta.env.VITE_CREDENTIAL_BOOKS}`
      );
      setBooks(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setBooks([])
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
      {
        search.length > 0 ? (
          <div>
            <CardBook
              books={books}
              key={books.id}
              pagina={pagina}
              porPagina={porPagina}
            />
            <button onClick={handlePreviousPage}>Previous</button>
            <button onClick={handleNextPage}>Next</button>
          </div>
        ) : (
          <h4 className={`${style.sin_busqueda}`}>Aún no se ha realizado ninguna búsqueda</h4>
        )
      }
      <div className={`${style.espacio}`}>
      </div>
    </div>
  );
};

export default Prueba;
