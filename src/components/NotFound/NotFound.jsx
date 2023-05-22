import falloTecnico from '../../assets/2676386.jpg';
import style from './NotFound.module.css';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className={style.contenedor}>
      <img src={falloTecnico} alt="404" />
      <p><a href="https://www.freepik.es/vector-gratis/concepto-landing-page-fallo-tecnico_5155998.htm#page=6&query=404&position=44&from_view=keyword&track=sph">Imagen de pikisuperstar</a> en Freepik</p>
      <button className={`btn btn-primary`} onClick={() => navigate('/')}>Volver al inicio</button>
    </div>
  )
}

export default NotFound