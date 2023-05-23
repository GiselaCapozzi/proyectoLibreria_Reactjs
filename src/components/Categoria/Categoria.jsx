import style from './Categoria.module.css';

const Categoria = props => {
  return (
    <div className={style.container}>
      <img className={style.imagen} src={props.imagen} alt={props.nombre} />
      <div className={style.cont_titulo}>
        <h3 className={style.titulo}>{props.nombre}</h3>
      </div>
    </div>
  )
}

export default Categoria