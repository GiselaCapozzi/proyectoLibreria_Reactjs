import { useState } from "react";
import { Link } from 'react-router-dom';
import logo from '../../assets/Libro-viejo-15a6c78c.png';
import "./Nav.css"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="navbar">
      <div className="nav_logo">
        <img src={logo} alt="logo" />
        <h3>Cosmos</h3>
      </div>
      <div className={`nav_items ${isOpen && "open"}`}>
        <Link href="#">CATEGORÍAS</Link>
        <Link href="#">AUTORES</Link>
        <Link href="#">EDITORIALES</Link>
      </div>
      <div className='nav_iconos'>
        <span><Link><i className='bi bi-search'></i></Link></span>
        <span><Link><i className='bi bi-person-circle'></i></Link></span>
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