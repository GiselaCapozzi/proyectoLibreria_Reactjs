import { useState } from "react";
import style from "./Register.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { signup } = useAuth();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    var verifEmail = /\S+@\S+\.\S+/

    try {
      await signup(user.email, user.password);
      navigate('/')
    } catch (error) {
      console.log(error.message)
      console.log(e.target[1].value.length)
      if (e.target[0].value === '') {
        setError('El email no puede estar vacio')
      } else if (e.target[1].value.length >= 1 || e.target[1].value.length <= 3) {
        setError('La contraseña debe tener al menos 6 caracteres')
      } else if (error.message === 'Firebase: Error (auth/invalid-email).' || verifEmail.test(e.target[0].value)) {
        setError('Email invalido')
      } else if (error.message === 'Firebase: Error (auth/missing-password).' || e.target[1].value.length === 0) {
        setError('La contraseña no puede estar vacia');
      } else if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
        setError('El email ya existe')
      }
    }
  };


  return (
    <div className={`container ${style.contenedor}`}>
      <div className={`${style.login}`}>
        <h3 className={`${style.titulo}`}>Registrarse</h3>
        {error && <p className={`alert alert-warning text-center`}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className={style.loguearse}>
            <div className={`input-group mb-3`}>
              <input
                type="email"
                name="email"
                className={`form-control`}
                placeholder="Email"
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
                className={`form-control`}
                placeholder="Contraseña"
                onChange={handleChange}
              />
              <span className={`input-group-text`}>
                <i className="bi bi-key"></i>
              </span>
            </div>
            <button className={`btn btn-primary ${style.btn_login}`}>
              Registrarse
            </button>
          </div>
        </form>
        <div className={`${style.log_options}`}>
          <div className={style.log_account}>
            <p>¿Tiene cuenta?</p>
            <Link to={"/login"} className={`${style.log_create}`}>
              <span>Inicie sesion</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
