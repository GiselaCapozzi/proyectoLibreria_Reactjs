import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Routes, Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Login from './container/Login/Login';
import Home from './container/Home/Home';
import Categorias from './container/Categorias/Categorias'
import Editoriales from './container/Editoriales/Editoriales';
import Autores from './container/Autores/Autores';
import Nosotros  from './container/Nosotros/Nosotros';
import Buscador  from './container/Buscador/Buscador';


function App() {

  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/categorias' element={<Categorias/>} />
        <Route path='/editoriales' element={<Editoriales />} />
        <Route path='/autores' element={<Autores/>} />
        <Route path='/nosotros' element={<Nosotros/>} />
        <Route path='/buscador' element={<Buscador/>} />
      </Routes>
    </div>
  )
}

export default App
