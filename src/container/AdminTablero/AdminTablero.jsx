import { useState } from 'react';
import FormFrases from '../FormFrases/FormFrases';
import style from './AdminTablero.module.css';

const AdminTablero = () => {

  const [showUsuarios, setShowUsuarios] = useState(false);
  const [showFrases, setShowFrases] = useState(false);
  const [showNoticias, setShowNoticias] = useState(false);

  const mostrarTablero = (e) => {
    if (e.target.id === 'tablero_usuario') {
      setShowUsuarios(true);
      setShowFrases(false);
      setShowNoticias(false);
    } else if (e.target.id === 'tablero_frases') {
      setShowFrases(true);
      setShowUsuarios(false);
      setShowNoticias(false);
    } else if (e.target.id === 'tablero_noticias') {
      setShowNoticias(true);
      setShowFrases(false);
      setShowUsuarios(false)
    }
  }

  const ocultarTablero = () => {
    setShowUsuarios(false);
    setShowFrases(false);
    setShowNoticias(false)
  }
  return (
    <div className={`${style.container}`}>
      <h1 className={`${style.titulo}`}>ADMINISTRACION DE CONTENIDO</h1>
      <div className={`${style.container_registros}`}>
        <div className={`${style.registros}`}>
          <button
            className={`btn btn-dark ${style.registros_boton}`}
            onClick={mostrarTablero}
            id='tablero_usuario'
          >
            Usuarios
          </button>
          <button
            className={`btn btn-dark ${style.registros_boton}`}
            onClick={mostrarTablero}
            id='tablero_frases'
          >
            Frases
          </button>
          <button
            className={`btn btn-dark ${style.registros_boton}`}
            onClick={mostrarTablero}
            id='tablero_noticias'
          >
            Noticias
          </button>
        </div>
      </div>
      <div className={`${style.boton_cerrar}`}>
        <button onClick={ocultarTablero}>
          <i className={`bi bi-x-lg btn btn-danger`}></i>
        </button>
      </div>
      <div className={`${style.container_tabla}`}>
        {
          showUsuarios &&
          <div className={`${style.tabla}`}>
            <div className={`${style.contenedor_titulo}`}>
              <h3 className={`${style.titulo_tablero}`}>Usuarios</h3>
            </div>
          </div>
        }
        {
          showFrases &&
          <div className={`${style.tabla}`}>
            <div className={`${style.contenedor_titulo}`}>
              <h3 className={`${style.titulo_tablero}`}>Frases</h3>
            </div>
            <FormFrases />
          </div>
        }
        {
          showNoticias &&
          <div className={`${style.tabla}`}>
            <div className={`${style.contenedor_titulo}`}>
              <h3 className={`${style.titulo_tablero}`}>Noticias</h3>
            </div>
          </div>
        }
        {
          !showFrases && !showUsuarios && !showNoticias ?
            <h3>No hay ningun tablero seleccionado</h3>
            : null
        }
      </div>

    </div>
  )
}

export default AdminTablero