import FormFrases from '../FormFrases/FormFrases';
import style from './AdminTablero.module.css';

const AdminTablero = () => {
  return (
    <div className={`${style.container}`}>
      <div className={`${style.registros}`}>
        <button>Usuarios</button>
        <button>Frases</button>
        <button>Noticias</button>
      </div>
      <div className={`${style.tabla}`}>
        <FormFrases />
      </div>
    </div>
  )
}

export default AdminTablero