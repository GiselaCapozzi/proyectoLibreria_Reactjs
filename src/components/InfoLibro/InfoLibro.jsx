import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";
import sinPortada from '../../assets/sin_portada.jpg';
import style from './InfoLibro.module.css';
import ReactStars from "react-stars";

const InfoLibro = () => {
  const { libro, id } = useParams();
  const [book, setBook] = useState();
  const [stars, setStars] = useState(0);

  const navigate = useNavigate();

  // const URL_API = `https://www.googleapis.com/books/v1/volumes/${id}`

  const obtenerLibro = async () => {
    try {
      const result = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
      setBook(result.data);
      setStars(result.data.volumeInfo.ratingsCount)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    obtenerLibro();
  }, [])

  // const cantStars = () => {

  // }
  console.log(book)
  console.log(stars)

  return (
    <>
      {
        !book ? (
          <p>No hay informacion</p>)
          : (
            <div className={`${style.container}`}>
              <div className={`${style.container_imagen}`}>
                <img
                  src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail : sinPortada}
                  alt={libro}
                  className={`${style.portada}`}
                />
                <div className={`${style.stars}`}>
                  <ReactStars
                    count={5}
                    size={50}
                    color2={'#ffd700'}
                    value={stars}
                    edit={false}

                  />
                </div>
                <select>
                  <option></option>
                </select>
              </div>
              <div>
                <h1>{libro}</h1>
                <h3>{book.volumeInfo.subtitle}</h3>
                <h2>Editorial: {book.volumeInfo.publisher}</h2>
                <>{book.volumeInfo.authors.map((autor, index) => (
                  <ul key={index}>
                    <li>{autor}</li>
                  </ul>
                ))}</>
                <p>
                  <Link>
                    {book.volumeInfo.description}
                  </Link>
                </p>
                <h3>Fecha de publicación: {book.volumeInfo.publishedDate}</h3>
                <div>Generos:
                  <span>
                    {
                      book.volumeInfo.categories.map((categorie, index) => (
                        <ul key={index}>
                          <li>{categorie}</li>
                        </ul>
                      ))
                    }
                  </span>
                </div>
                <p>Páginas: {book.volumeInfo.pageCount}</p>
                <p>Cod. ISBN</p>
                <p>Idioma</p>
              </div>
            </div>
          )
      }
      <div>
        <button
          className={`btn btn-primary`}
          onClick={() => navigate('/buscador')}>
          Regresar al buscador</button>
      </div>
    </>
  )
};

export default InfoLibro;