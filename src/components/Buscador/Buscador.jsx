import style from './Buscador.module.css';

const Buscador = () => {
  return (
    <div className={`${style.container}`}>
      <input className={` form-control ${style.input_search}`} type='search' />
      <i className={`bi bi-search ${style.icon_search}`}></i>
      <div className={`${style.espacio}`}>
        
      </div>
    </div>
  )
}

export default Buscador