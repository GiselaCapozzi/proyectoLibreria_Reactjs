import { useState, useEffect } from 'react';
import style from './Perfil.module.css';
import { useAuth } from '../../context/authContext';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const Perfil = () => {
  const { user } = useAuth();
  const [usuario, setUsuario] = useState();

  const obtenerDatosUsuario = async () => {
    const db = getFirestore();
    const docRef = doc(db, 'usuarios', user.uid);
    try {
      await getDoc(docRef)
        .then((res) => {
          setUsuario(res.data())
        })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    obtenerDatosUsuario();
  }, []);

  console.log(usuario)

  return (
    <div className={`container`}>
      <form>
        <div className={`${style.image_container}`}>
          <img className={`${style.photouser}`} src={usuario.photouser} alt='foto' />
          <span><i className={`bi bi-pencil ${style.pencil_image}`}></i></span>
        </div>
        <div>
          <label className={`form-label`}>Nombre de usuario</label>
          <input className={`form-control`} value={usuario.username} />
        </div>
        <div>
          <label className={`form-label`}>Email</label>
          <input className={`form-control`} value={usuario.email} />
        </div>
      </form>
      <button className={`btn btn-primary `}>Volver al home</button>
    </div>

  )
}

export default Perfil