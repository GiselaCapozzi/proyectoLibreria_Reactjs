import { useState } from "react";
import { Link } from 'react-router-dom';
import logo from '../../assets/Libro-viejo-15a6c78c.png';
import "./Nav.css";

import Categorias from "../../container/Categorias/Categorias";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);

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
          <li><Link className={`nav_categorias ${show} && 'show'`}>CATEGORÍAS</Link>
            <ul className={`submenu`}>
              <li><Categorias /></li>
              <li><Link>TODAS LAS CATEGORIAS</Link></li>
            </ul>
          </li>
          <li><Link to="/autores">AUTORES</Link></li>
          <li><Link to='/editoriales' >EDITORIALES</Link></li>
          <li><Link to="/nosotros">NOSOTROS</Link></li>
        </ul>
      </div>
      <div className='nav_iconos'>
        <span><Link to='/buscador'><i className='bi bi-search'></i></Link></span>
        <span><Link to='/login'><i className='bi bi-person-circle'></i></Link></span>
        <span><Link><i className='bi bi-cart'></i></Link></span>
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