import { Link } from 'react-router-dom';
import styles from './CardBook.module.css';

const CardBook = ({ title, image }) => {
  return (
    <div className={`card`} style={{ width: '18rem' }}>
      <img src={image} className={`card-img-top`} alt={title}/>
      <div className={`card-body`}>
        <h5 className={`card-title`}>{title}</h5>
        <p className={`card-text`}></p>
        <Link to={`#`}  className={`btn btn-primary`}>Saber mas</Link>
      </div>
    </div>
  )
}

export default CardBook