import { useState, useEffect } from 'react';
import style from './Buscador.module.css';
import CardBook from '../../container/CardBook/CardBook';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Paginacion from '../Paginacion/Paginacion';

const Buscador = () => {

  const [infoLibro, setInfoLibro] = useState([]);
  const [search, setSearch] = useState('');
  const [cantResultado, setCantResultado] = useState();
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(40);

  const URL_API = `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=${porPagina}&startIndex=${pagina}&key=AIzaSyAJlKP9GASA1rY442XsavTNlKXGcNnNR-c`;

  const handleChange = e => {
    setSearch(e.target.value);
  }

  const getBooks = async () => {
    await axios.get(URL_API)
      .then(res => {
        setInfoLibro(res.data.items)
        setCantResultado(res.data.totalItems)
        console.log('hola')
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  useEffect(() => {
    getBooks();
  }, [])

  console.log(infoLibro, search)
  return (
    <div className={`${style.container}`}>
      {/* <form className={`${style.buscador}`}> */}
      <input
        className={` form-control ${style.input_search}`}
        type='search'
        onChange={handleChange}
        defaultValue={search}
      />
      {/* <button
          type='submit'
          className={`btn btn-success`}
        >Buscar</button> */}
      {/* </form> */}
      {
        search && infoLibro ? (
          <div>
            <CardBook
              infoLibro={infoLibro}
              key={infoLibro.id}
              pagina={pagina}
              porPagina={porPagina}
            />
            {/* <Paginacion
              pagina={pagina}
              setPagina={setPagina}
              porPagina={porPagina}
              cantResultado={cantResultado}
            /> */}
          </div>
        ) : !infoLibro ? (
          <h4 className={`${style.sin_busqueda}`}>No se encontro un libro con ese título</h4>
        ) : (
          <h4 className={`${style.sin_busqueda}`}>Realice una busqueda</h4>
        )
      }
      <div className={`${style.espacio}`}>
      </div>
    </div>
  )
}

export default Buscador