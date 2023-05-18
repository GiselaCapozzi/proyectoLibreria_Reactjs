import style from './Categoria.module.css';

const Categoria = () => {
  return (
    <div className={style.container}>
        <img className={style.imagen} src='https://cdn.pixabay.com/photo/2017/04/24/13/37/architecture-2256489_960_720.jpg' alt="arqui" />
        <h3 className={style.titulo}>Arte, Arquitectura y Diseño</h3>
    </div>
  )
}

export default Categoria