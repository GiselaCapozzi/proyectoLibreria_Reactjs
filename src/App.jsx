import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Routes, Route } from 'react-router-dom';

// Componentes
import Nav from './components/Nav/Nav';
import Login from './container/Login/Login';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
