import { useState } from 'react';
import style from "./Login.module.css";
import google from "../../assets/google.png";
import facebook from "../../assets/facebook.png";
import { Link } from "react-router-dom";
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {

  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login, loginWithGoogle, resetPassword } = useAuth();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUser({
      ...user,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      setLoading(true);
      await login(user.email, user.password);
      setTimeout(function () {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Ha iniciado sesion satifactoriamente',
          showConfirmButton: false,
          timer: 1500,
          background: '#799496',
          color: '#E9EB9E'
        })

        navigate('/')
      }, 3000)
    } catch (error) {
      if (e.target[0].value === '' || error.message === 'Firebase: Error (auth/invalid-email).') {
        setError('Debe ingresar un email')
      } else if (error.message === 'Firebase: Error (auth/wrong-password).') {
        setError('La contraseña es incorrecta')
      } else if (error.message === 'Firebase: Error (auth/user-not-found).') {
        setError('El usuario no se encuentra registrado')
      } else if (e.target[1].value === '' || error.message === 'Firebase: Error (auth/missing-password).') {
        setError('La contraseña no puede estar vacia')
      }
      setLoading(false);
    }
  }

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate('/');
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email) return setError('Por favor ingresa tu email');

    try {
      await resetPassword(user.email);
      setError('Te hemos enviado un email con un enlace para resetear tu contraseña')
    } catch (error) {
      setError(error.message)
    }
  }

  return (

    <div className={`container ${style.contenedor}`}>
      <div className={`${style.login}`}>
        <h3 className={`${style.titulo}`}>Loguearse</h3>
        <div className={style.redes}>
          <div className={`${style.boton}`}>
            <button className={`btn btn-light ${style.btn_google}`}
              onClick={handleGoogleLogin}
            >
              Google
              <img className={`${style.btn_imagen}`} src={google} alt="" />
            </button>
          </div>
          {/* <div className={`${style.boton}`}>
            <button className={`btn btn-light ${style.btn_facebook}`}>
              Facebook
              <img className={`${style.btn_imagen}`} src={facebook} alt="" />
            </button>
          </div> */}
        </div>
        <div className={style.separador}>
          <h5>o</h5>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={style.loguearse}>
            {error && <p className={`alert alert-warning text-center`}>{error}</p>}
            <div className={`input-group mb-3`}>
              <input
                type="email"
                name="email"
                id=""
                className={`form-control`}
                placeholder="Email"
                aria-label="Email"
                aria-describedby="basic-addon1"
                onChange={handleChange}
              />
              <span className={`input-group-text`}>
                <i className="bi bi-at"></i>
              </span>
            </div>
            <div className={`input-group mb-3`}>
              <input
                type="password"
                name="password"
                id=""
                className={`form-control`}
                placeholder="Contraseña"
                aria-label="Password"
                aria-describedby="basic-addon2"
                onChange={handleChange}
              />
              <span className={`input-group-text`}>
                <i className="bi bi-key"></i>
              </span>
            </div>
            {
              loading ? <button className={`btn btn-primary ${style.btn_login}`} role='status'>
              <div className={`spinner-border text-light`} role='status'>
              <span></span>
              </div>
            </button> : <button className={`btn btn-primary ${style.btn_login}`}>
              Inicia sesión
            </button> 
            }
          </div>
        </form>
        <div className={`${style.log_options}`}>
          <Link className={`${style.log_reset}`}
            onClick={handleResetPassword}
          >
            <p>¿Olvidaste tu contraseña?</p>
          </Link>
          <div className={style.log_account}>
            <Link to={'/register'} className={`${style.log_create}`}>
            <p>¿Sin cuenta?</p>
              <span>Crea una</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
