import React from 'react';
import photouser from '../../assets/photouser.png';
import { useAuth } from '../../context/authContext';
import style from '../Home/Home.module.css';
import CarouselImage from '../../components/Carousel/Carousel';

const Home = () => {

  const { user } = useAuth();

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
          {
            !user.displayName ? nombreUser : user.displayName
          }
        </span></h4>
        <img 
          src={user.photoURL ? user.photoURL : photouser} 
          alt='photo'
          className={`${style.photo_user}`}
          />
      </div>
    </div>
  )
}

export default Home