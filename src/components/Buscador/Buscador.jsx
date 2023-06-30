import { useState, useEffect } from 'react';
import style from './Buscador.module.css';
import CardBook from '../../container/CardBook/CardBook';
import axios from 'axios';

const Buscador = () => {

  const [infoLibro, setInfoLibro] = useState([]);
  const [search, setSearch] = useState('');

  const URL_API = 'https://www.googleapis.com/books/v1/volumes?q=harry+potter&key=AIzaSyAJlKP9GASA1rY442XsavTNlKXGcNnNR-c';

  const obtenerLibros = async () => {
    await axios.get(URL_API)
      .then(res => {
        setInfoLibro(res.data.items)
      })
      .catch(error => {
        console.log(error)
      })
  }
  
  useEffect(() => {
    obtenerLibros();
  }, [])

  return (
    <div className={`${style.container}`}>
      <input className={` form-control ${style.input_search}`} type='search' />
      <i className={`bi bi-search ${style.icon_search}`}></i>
      <CardBook 
        infoLibro={infoLibro}
        key={infoLibro.id}
      />
      <div className={`${style.espacio}`}>
        
      </div>
    </div>
  )
}

export default Buscador