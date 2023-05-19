import style from './Login.module.css';
import google from '../../assets/google.png';
import facebook from '../../assets/facebook.png';

const Login = () => {
  return (
    <div className={`container ${style.contenedor}`}>
      <div className={`${style.login}`}>
        <div className={style.redes}>
          <div className={`${style.boton}`}>
            <button className={`btn btn-light ${style.btn_google}`}>Google
              <img className={`${style.btn_imagen}`} src={google} alt="" />
            </button>
          </div>
          <div className={`${style.boton}`}>
            <button className={`btn btn-light ${style.btn_facebook}`}>Facebook
              <img className={`${style.btn_imagen}`} src={facebook} alt="" />
            </button>
          </div>
        </div>
        <div className={style.separador}>
          <h5>or</h5>
        </div>
      </div>
    </div>
  )
}

export default Login