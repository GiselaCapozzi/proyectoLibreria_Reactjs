import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Routes, Route } from 'react-router-dom';


import Nav from './components/Nav/Nav';
import Login from './components/Login/Login';

function App() {

  return (
    <div>
      <Nav />
      {/* <Routes>
        <Route path='/login' element={<Login />} />
      </Routes> */}
    </div>
  )
}

export default App
