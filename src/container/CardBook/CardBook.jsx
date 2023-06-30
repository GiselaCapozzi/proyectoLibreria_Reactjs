import { Link } from 'react-router-dom';
import styles from './CardBook.module.css';
import sinPortada from '../../assets/sin_portada.jpg';

const texto = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis velit bibendum, ullamcorper diam sed, facilisis ante. In cursus velit sem, aliquam fringilla est malesuada ut. Donec turpis lectus, auctor et nisi id, volutpat tempus urna. Donec iaculis at enim quis auctor. Maecenas tempor aliquet sem, feugiat pretium ante scelerisque vel. Aenean condimentum ipsum diam, nec viverra dolor tempor quis. Cras nec metus tincidunt, dignissim nulla sed, vehicula sapien. Ut pretium mauris non ipsum rhoncus volutpat. Aenean pretium arcu in mauris lobortis aliquam. Duis dictum lectus quam. Integer vitae faucibus nisi. '

const CardBook = ({ infoLibro }) => {
  console.log(infoLibro)
  // const { title } = infoLibro.items[0].volumeInfo;
  // console.log(title)

  return (
    <>
      {
        infoLibro ? (
          <div className={`${styles.container}`} >
            {
              infoLibro.map(item => {
                let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail ;
                return (
                  <div key={item.id} className={`card ${styles.container_card}`}>
                    <div className={`${styles.container_image}`}>
                      <img src={thumbnail ? thumbnail : sinPortada} className={`card-img-top ${styles.portada}`} />
                    </div>
                    <div className={`card-body`}>
                      <h5 className={`card-title ${styles.titulo}`}>{item.volumeInfo.title.length > 79 ? item.volumeInfo.title.slice(0, 80)+'...' : item.volumeInfo.title}</h5>
                      <p className={`card-text ${styles.texto}`}>{item.volumeInfo.description ? item.volumeInfo.description.slice(0, 150) + '...' : '- Sin descripción -'}</p>
                      <div className={`${styles.container_boton}`}>
                        <Link to={`#`} className={`btn btn-primary ${styles.boton_mas}`}>Saber mas <div className={`${styles.container_boton}`}></div></Link>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        ) : (<p>Realice una busqueda</p>)
      }
    </>
  )
}

export default CardBook