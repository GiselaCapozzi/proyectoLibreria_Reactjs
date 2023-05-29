import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Routes, Route } from 'react-router-dom';

// Componentes
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Login from './container/Login/Login';
import Home from './container/Home/Home';
import Categoria from './container/Categoria/Categoria';
import Editoriales from './container/Editoriales/Editoriales';
import Autores from './container/Autores/Autores';
import Nosotros  from './container/Nosotros/Nosotros';
import Buscador  from './container/Buscador/Buscador';
import NotFound from './components/NotFound/NotFound';

function App() {

  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/categoria/:categoria' element={<Categoria/>} />
        <Route path='/editoriales' element={<Editoriales />} />
        <Route path='/autores' element={<Autores/>} />
        <Route path='/nosotros' element={<Nosotros/>} />
        <Route path='/buscador' element={<Buscador/>} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
