import { useState } from "react";
import style from "./Register.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from '../../firebase/InitConfig';
import { v4 as  uuidv4} from 'uuid';

const Register = () => {
  const { signup, user } = useAuth();
  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
    username: "",
    photoUser: "",
    admin: false 
  });
  const [error, setError] = useState('');
  // const [image, setImage] = useState('');
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUsuario({
      ...usuario,
      [name]: value,
    });
  };

  const handleChangeImage = async (e) => {
    const storageRef = ref(storage, `photoUser/${uuidv4()}`)
    await uploadBytes(storageRef, e.target.files[0])
      .then(snapshot => {
        console.log(snapshot)
      })
    const imageUrl = await getDownloadURL(storageRef);
    setUsuario({
      ...usuario,
      photoUser: imageUrl
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    var verifEmail = /\S+@\S+\.\S+/
    try {
      await signup(usuario.email, usuario.password, usuario.photoUser, usuario.username, usuario.admin);

      navigate('/')
    } catch (error) {
      console.log(error.message)
      setError(error.message)
    }
  };

  console.log(usuario)

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
            <div className={`input-group mb-3`}>
              <input
                type="file"
                name="photoUser"
                className={`form-control`}
                placeholder="Foto de usuario"
                onChange={handleChangeImage}
              />
              <span className={`input-group-text`}>
                <i className="bi bi-image"></i>
              </span>
            </div>
            <div className={`input-group mb-3`}>
              <input
                type="text"
                name="username"
                className={`form-control`}
                placeholder="Nombre de usuario"
                onChange={handleChange}
              />
              <span className={`input-group-text`}>
                <i className="bi bi-person-vcard"></i>
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
