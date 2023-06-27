import { useState, useEffect } from 'react';
import style from './Perfil.module.css';
import notUser from '../../assets/not_user.jpg';
import { useAuth } from '../../context/authContext';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

const Perfil = () => {
  const { user } = useAuth();
  const [usuario, setUsuario] = useState({
    username: '',
    email: '',
    photouser: ''
  });
  const navigate = useNavigate();

  const obtenerDatosUsuario = async () => {
    const db = getFirestore();
    const docRef = doc(db, 'usuarios', user.uid);
    try {
      await getDoc(docRef)
        .then((res) => {
          setUsuario({
            username: res.data().username,
            email: res.data().email,
            photouser: res.data().photouser
          })
        })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    obtenerDatosUsuario();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  return (
    <div>
      {
        usuario ? (
          <div className={`container`}>
            <form onSubmit={handleSubmit}>
              <div className={`${style.image_container}`}>
                {/* <button className={`${style.contenedor_btn_file}`}> */}
                  <label htmlFor='btn-file'></label>
                  <input id='btn-file' type='file' />
                  <img className={`${style.photouser}`} src={usuario && usuario.photouser} alt='foto' />
                  <i className={`bi bi-pencil ${style.pencil_image}`}></i>
                  {/* <span><i className={`bi bi-pencil ${style.pencil_image}`}></i></span> */}
                {/* </button> */}
              </div>
              <div className={`${style.usuario_container}`}>
                <label className={`form-label`}>Nombre de usuario</label>
                <input className={`form-control`} value={usuario && usuario.username} />
              </div>
              <div className={`${style.email_container}`}>
                <label className={`form-label`}>Email</label>
                <input className={`form-control`} value={usuario && usuario.email} />
              </div>
            </form>
            <button className={`btn btn-primary ${style.boton}`}>Volver al home</button>
          </div>
        ) :
          (
            <div className={`${style.contenedor}`}>
              <h1 className={`${style.sin_perfil}`}>No hay perfil para mostrar</h1>
              <img src={notUser} alt="notUser" />
              <p><a href="https://www.freepik.es/vector-gratis/boicotear-ilustracion-vector-concepto-abstracto-programa-politico-activismo-consumo-comportamiento-colectivo-cancelar-cultura-compra-moral-accion-solidaria-protesta-publica-metafora-abstracta_11668209.htm#page=2&query=not%20user&position=38&from_view=search&track=ais">Imagen de vectorjuice</a> en Freepik</p>
              <button className={`btn btn-primary`} onClick={() => navigate('/')}>Volver al inicio</button>
            </div>
          )
      }
    </div>
  )
}

export default Perfil