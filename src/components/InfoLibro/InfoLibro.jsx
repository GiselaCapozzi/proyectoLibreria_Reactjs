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
  const [loading, setLoading] = useState(true);
  const [bookmark, setBookMark] = useState(false);
  const [iconLibro, setIconLibro] = useState(false);
  const [journal, setJournal] = useState(false);

  const navigate = useNavigate();

  // const URL_API = `https://www.googleapis.com/books/v1/volumes/${id}`

  const obtenerLibro = async () => {
    try {
      const result = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
      setBook(result.data);
      setStars(result.data.volumeInfo.ratingsCount)
      setLoading(false);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    obtenerLibro();
  }, []);

  const cambiarBookmark = () => {
    setBookMark(!bookmark);
  }

  const cambiarIconLibro = () => {
    setIconLibro(!iconLibro);
  }

  const cambiarJournal = () => {
    setJournal(!journal);
  }

  console.log(book)

  return (
    <>
      {
        !book ? (
          <div className={`spinner-border text-info`} role="status">
            <span className={`visually-hidden`}>Loading...</span>
          </div>
        )
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
                    size={30}
                    color1={"#616E79"}
                    color2={'#ffd700'}
                    value={stars}
                    edit={true}
                  />
                </div>
                <div className={`${style.container_iconos}`}>
                  <div className={`${style.container_bookmark}`}>
                    {
                      !bookmark ?
                          <i className={`bi bi-bookmark-heart ${style.bookmark}`}
                            id="bookmark"
                            onClick={cambiarBookmark}
                          ></i>
                          :
                        <i className={`bi bi-bookmark-heart-fill ${style.bookmark}`}
                          id="bookmark"
                          onClick={cambiarBookmark}
                        ></i>
                    }
                    <p>Me gusta</p>
                  </div>
                  <div className={`${style.container_libro}`}>
                    {
                      !iconLibro ? <i
                        className={`bi bi-book ${style.libro}`}
                        id="libro"
                        onClick={cambiarIconLibro}
                      ></i> :
                        <i
                          className={`bi bi-book-fill ${style.libro}`}
                          id="libro"
                          onClick={cambiarIconLibro}
                        ></i>
                    }
                    <p>Leyendo</p>
                  </div>
                  <div
                    className={`${style.container_journal}`}>
                    {
                      !journal ? <i
                        className={`bi bi-journal-bookmark ${style.journal}`}
                        id="jounal"
                        onClick={cambiarJournal}
                      ></i> :
                        <i
                          className={`bi bi-journal-bookmark-fill ${style.journal}`}
                          id="jounal"
                          onClick={cambiarJournal}
                        ></i>
                    }
                    <p>Leído</p>
                  </div>
                </div>
              </div>
              <div className={`${style.container_descipcion}`}>
                <h1>{libro}</h1>
                <h3>{book.volumeInfo.subtitle}</h3>
                <div className={`${style.container_estrellas}`}>
                  <ReactStars
                    count={5}
                    size={50}
                    color1={"#616E79"}
                    color2={'#ffd700'}
                    value={stars}
                    edit={false}
                  />
                  <h3 className={`${style.cant_estrellas}`}>{stars}</h3>
                </div>
                <h2>Editorial: {book.volumeInfo.publisher}</h2>
                <>
                  {book.volumeInfo.authors.map((autor, index) => (
                    <ul className={`${style.autor}`} key={index}>
                      <li>{autor}</li>
                    </ul>
                  ))}
                </>
                <div className={`${style.container_sinopsis}`}>
                  <p>
                    {book.volumeInfo.description}
                  </p>
                </div>
                <h3>Fecha de publicación: {book.volumeInfo.publishedDate}</h3>
                <p>Generos:</p>
                <div className={`${style.container_generos}`}>
                  <span>
                    {
                      book.volumeInfo.categories ? (
                        book.volumeInfo.categories.map((categorie, index) => (
                          <ul key={index} className={`${style.generos}`}>
                            <li>{categorie}</li>
                          </ul>
                        ))
                      ) : null
                    }
                  </span>
                </div>
                <p>Páginas: {book.volumeInfo.pageCount}</p>
              </div>
            </div>
          )
      }
      <div className={`${style.boton_return}`}>
        <button
          className={`btn btn-primary ${style.return}`}
          onClick={() => navigate(`/buscador`)}>
          Regresar al buscador</button>
      </div>
    </>
  )
};

export default InfoLibro;