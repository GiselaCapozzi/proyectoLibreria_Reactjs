import { useState, useEffect } from 'react';
import style from './Buscador.module.css';
import CardBook from '../../container/CardBook/CardBook';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

const Buscador = () => {

  const [infoLibro, setInfoLibro] = useState([]);
  const [search, setSearch] = useState('');
  const [productosPorPagina, setProductosPorPagina] = useState(50);
  const [currentPage, setCurrentPage] = useState(1);
  const [cantResultado, setCantResultado] = useState(); 
  
  const URL_API = `https://www.googleapis.com/books/v1/volumes?q=harry&key=AIzaSyAJlKP9GASA1rY442XsavTNlKXGcNnNR-c&maxResults=15`;
  
  const paginas = [];

  const obtenerPaginas = Math.ceil(cantResultado/20);
    
  for (let i = 1; i <= obtenerPaginas; i++){
    paginas.push(i);
  }

  const handleChange = e => {
    setSearch(e.target.value);
    // setInfoLibro([])
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.get(URL_API)
      .then(res => {
        setInfoLibro(res.data.items)
        setCantResultado(res.data.totalItems)
      })
      .catch(error => {
        console.log(error.message)
      })
    }
    
    useEffect(() => {
      setInfoLibro()
    }, [])
    
    console.log(infoLibro)
  return (
    <div className={`${style.container}`}>
      <form onSubmit={handleSubmit} className={`${style.buscador}`}>
        <input
          className={` form-control ${style.input_search}`}
          type='search'
          onChange={handleChange}
          value={search}
        />
        <button
          type='submit'
          className={`btn btn-success`}
        >Buscar</button>
      </form>
      {
        search && infoLibro ? (
          <div>
            <CardBook
              infoLibro={infoLibro}
              key={infoLibro.id}
              currentPage={currentPage}
              productosPorPagina={productosPorPagina}
            />
          </div>
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