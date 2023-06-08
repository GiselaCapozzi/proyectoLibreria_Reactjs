import style from "./Login.module.css";
import google from "../../assets/google.png";
import facebook from "../../assets/facebook.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={`container ${style.contenedor}`}>
      <div className={`${style.login}`}>
        <div className={style.redes}>
          <div className={`${style.boton}`}>
            <button className={`btn btn-light ${style.btn_google}`}>
              Google
              <img className={`${style.btn_imagen}`} src={google} alt="" />
            </button>
          </div>
          <div className={`${style.boton}`}>
            <button className={`btn btn-light ${style.btn_facebook}`}>
              Facebook
              <img className={`${style.btn_imagen}`} src={facebook} alt="" />
            </button>
          </div>
        </div>
        <div className={style.separador}>
          <h5>or</h5>
        </div>
        <div className={style.loguearse}>
          <div className={`input-group mb-3`}>
            <input
              type="email"
              name=""
              id=""
              className={`form-control`}
              placeholder="Email"
              aria-label="Email"
              aria-describedby="basic-addon1"
            />
            <span className={`input-group-text`}>
              <i className="bi bi-at"></i>
            </span>
          </div>
          <div className={`input-group mb-3`}>
            <input
              type="password"
              name=""
              id=""
              className={`form-control`}
              placeholder="Contraseña"
              aria-label="Password"
              aria-describedby="basic-addon2"
            />
            <span className={`input-group-text`}>
              <i className="bi bi-key"></i>
            </span>
          </div>
          <button className={`btn btn-primary ${style.btn_login}`}>
            Log in
          </button>
        </div>
        <div className={`${style.log_options}`}>
          <Link className={`${style.log_reset}`}>
            <p>¿Recuperar la contraseña?</p>
          </Link>
          <div className={style.log_account}>
            <p>¿Sin cuenta?</p>
            <Link className={`${style.log_create}`}>
              <span>Crea una</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
