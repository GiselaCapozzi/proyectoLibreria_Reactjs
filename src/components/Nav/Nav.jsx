import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import logo from '../../assets/Libro-viejo-15a6c78c.png';
import "./Nav.css";

// import Categorias from "../../container/Categorias/Categorias";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);

  const [usuario, setUsuario] = useState();
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();

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
  }, [user])

  console.log(usuario)

  const handleLogout = async () => {
    setUsuario({
      username: '',
      admin: false,
      email: '',
      photouser: ''
    })
    try {
      await logout();
      navigate('/login')
    } catch (error) {
      console.log(error.message)
    }
  }

  if (loading) return <h1>Loading</h1>

  return (
    <div className="navbar">
      <div className="nav_logo">
        <Link to='/' className='logo_titulo'>
          <img src={logo} alt="logo" />
          <h3>Cosmos</h3>
        </Link>
      </div>
      <div className={`nav_items ${isOpen && "open"}`}>
        <ul className={`menu`}>
          {/* <li><Link className={`nav_categorias ${show} && 'show'`}>CATEGORÍAS</Link>
            <ul className={`submenu`}>
              <li><Categorias /></li>
              <li><Link to={'/allcategories'}>TODAS LAS CATEGORIAS</Link></li>
            </ul>
          </li>
          <li><Link to="/autores">AUTORES</Link></li>
          <li><Link to='/editoriales' >EDITORIALES</Link></li> */}
          <li><Link to="/autores">BUSCADOR DELIBROS</Link></li>
          {
            usuario && usuario.admin === true ? <li><Link to="/admin">TABLERO ADMIN</Link></li> : null
          }
        </ul>
      </div>
      <div className='nav_iconos'>
        <ul className="menu_session">
          {/* <li><Link to='/buscador'><i className='bi bi-search'></i></Link></li> */}
          <li>
            {
              usuario && <img className={`fotoUsuario`} src={usuario.photouser} alt="" />
            }
            {
              !user && <i className='bi bi-person-circle'></i>
            }
            <ul className={`submenu_session`}>
              {
                user ? (
                  <>
                    <li><Link 
                    to='/perfil'
                    data-bs-toggle='modal'
                    data-bs-target='#modalPerfil'
                    >
                    Perfil
                    </Link></li>
                    <li><Link onClick={handleLogout}>Salir</Link></li>
                  </>
                ) : (
                  <>
                    <li><Link to='/login'>Inicia sesion</Link></li>
                    <li><Link to='/register'>Registrarse</Link></li>
                  </>
                )
              }
            </ul>
          </li>
          {/* <li><Link><i className='bi bi-cart'></i></Link></li> */}
        </ul>
      </div>
      <div className={`nav_toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)} >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}
export default Navbar