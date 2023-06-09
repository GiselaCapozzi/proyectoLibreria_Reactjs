import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './Buscador.module.css';
import CardBook from '../../container/CardBook/CardBook';
import.meta.url;
// const CREDENCIAL_API = ;

const Buscador = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState({
    busqueda: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(12);

  const URL_API = `https://www.googleapis.com/books/v1/volumes?q=${search.busqueda}&maxResults=${porPagina}&startIndex=${currentPage}&key=${import.meta.env.VITE_CREDENTIAL_BOOKS}`;

  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        URL_API
      );
      setBooks(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [currentPage]);

  const handleChange = (e) => {
    setCurrentPage(1)
    setSearch({
      [e.target.name]: e.target.value
    })
  }

console.log(search.busqueda)

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
      <h1>Buscador de Libros</h1>
      <div className={`${style.buscador}`}>
        <input
          className={` form-control ${style.input_search}`}
          type='search'
          onChange={handleChange}
          defaultValue={search.busqueda}
          name='busqueda'
        />
        <button
          type='submit'
          className={`btn btn-success`}
          onClick={fetchBooks}
        >Buscar</button>
      </div>

      {
        search.busqueda.length > 0 ? (
          <div>
            <CardBook
              books={books}
              key={books.id}
              pagina={pagina}
              porPagina={porPagina}
            />
            <div className={`${style.container_botones}`}>
              <button
                onClick={handlePreviousPage}
                className={`btn btn-primary ${style.boton_anterior} ${currentPage === 1 ? 'disabled' : ''}`}
              >
                Previous
              </button>
              <input
                type='text'
                placeholder={currentPage}
                className={`${style.input_pagina}`}
                readOnly
              // disabled
              />
              <button
                onClick={handleNextPage}
                className={`btn btn-primary ${style.siguiente}`}
              >
                Next
              </button>
            </div>
          </div>
        ) : !books ? (
          <h4 className={`${style.sin_busqueda}`}>hola</h4>
        )
          : (
            <h4 className={`${style.sin_busqueda}`}>Aún no se ha realizado ninguna búsqueda</h4>
          )
      }
      <div className={`${style.espacio}`}>
      </div>
    </div>
  );
};

export default Buscador;
