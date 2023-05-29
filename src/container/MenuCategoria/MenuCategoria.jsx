import { Link } from 'react-router-dom';
import style from './MenuCategoria.module.css';

const MenuCategoria = ({ nombre, imagen }) => {
  return (
    <Link to={`/categoria/${nombre}`} className={style.container}>
      <img className={style.imagen} src={imagen} alt={nombre} />
      <div className={style.cont_titulo}>
        <h3 className={style.titulo}>{nombre}</h3>
      </div>
    </Link>
  )
}

export default MenuCategoria;