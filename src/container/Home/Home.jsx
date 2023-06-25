import React, { useEffect, useState } from 'react';
import photouser from '../../assets/photouser.png';
import { useAuth } from '../../context/authContext';
import style from '../Home/Home.module.css';
import CarouselImage from '../../components/Carousel/Carousel';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import CardFrase from '../CardFrase/CardFrase';

const Home = () => {

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
  }, [])

console.log(usuario)

  // Extraigo el nombre de usuario del mail
  const email_analizado = /^([^]+)@(\w+).(\w+)$/.exec(user.email);
  const [, nombre] = email_analizado;

  // Pongo en mayuscula la primera letra del usuario y lo concateno con el resto del nombre
  const primeraMayus = nombre.charAt(0).toUpperCase();
  const restoNombre = nombre.slice(1);
  const nombreUser = primeraMayus.concat(restoNombre)

  return (
    <div>
      <CarouselImage />
      <div className={`${style.bienvenido_user}`}>
        <h4>Bienvenido/a <span>
          {/* {
            !user.displayName ? nombreUser : usuario.username
          } */}
          {usuario ? usuario.username : user.displayName}
        </span></h4>
        <img
          src={usuario ? usuario.photouser : user.photoURL}
          alt='photo'
          className={`${style.photo_user}`}
        />
      </div>
      <CardFrase />
    </div>
  )
}

export default Home