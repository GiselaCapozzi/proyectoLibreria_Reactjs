import style from './Categoria.module.css';

const Categoria = ({ nombre, imagen }) => {
  console.log(nombre);
  return (
    <div className={style.container}>
      <img className={style.imagen} src={imagen} alt={nombre} />
      <div className={style.cont_titulo}>
        <h3 className={style.titulo}>{nombre}</h3>
      </div>
    </div>
  )
}

export default Categoria