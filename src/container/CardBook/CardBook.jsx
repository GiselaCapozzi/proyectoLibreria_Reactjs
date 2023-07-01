import { Link } from 'react-router-dom';
import styles from './CardBook.module.css';
import sinPortada from '../../assets/sin_portada.jpg';

const CardBook = ({ infoLibro }) => {

  return (
    <>
      {
        infoLibro ? (
          <div className={`${styles.container}`} >
            {
              infoLibro.map(item => (
                <div key={item.id} className={`card ${styles.container_card}`}>
                  <div className={`${styles.container_image}`}>
                    <img src={
                      item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail ?
                        item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail :
                        sinPortada}
                      className={`card-img-top ${styles.portada}`} />
                  </div>
                  <div className={`card-body`}>
                    <div className={`${styles.container_texto}`}>
                      <h5 className={`card-title ${styles.titulo}`}>{item.volumeInfo.title.length > 79 ? item.volumeInfo.title.slice(0, 80) + '...' : item.volumeInfo.title}</h5>
                      <p className={`card-text ${styles.texto}`}>{item.volumeInfo.description ? item.volumeInfo.description.slice(0, 150) + '...' : '- Sin descripción -'}</p>
                    </div>
                    <div className={`${styles.container_boton}`}>
                      <Link to={`#`} className={`btn btn-primary ${styles.boton_mas}`}>Saber mas <div className={`${styles.container_boton}`}></div></Link>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        ) : (<p>No se encontro la busqueda</p>)
      }
    </>
  )
}

export default CardBook