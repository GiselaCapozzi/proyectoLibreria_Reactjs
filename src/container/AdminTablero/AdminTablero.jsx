import FormFrases from '../FormFrases/FormFrases';
import style from './AdminTablero.module.css';

const AdminTablero = () => {
  return (
    <div className={`${style.container}`}>
      <h1 className={`${style.titulo}`}>ADMINISTRACION DE CONTENIDO</h1>
      <div className={`${style.container_registros}`}>
        <div className={`${style.registros}`}>
          <button className={`btn btn-dark ${style.registros_boton}`}>Usuarios</button>
          <button className={`btn btn-dark ${style.registros_boton}`}>Frases</button>
          <button className={`btn btn-dark ${style.registros_boton}`}>Noticias</button>
        </div>
      </div>
      <div className={`${style.container_tabla}`}>
        <div className={`${style.tabla}`}>
          <FormFrases />
        </div>
      </div>

    </div>
  )
}

export default AdminTablero