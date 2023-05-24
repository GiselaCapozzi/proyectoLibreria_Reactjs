import { Component } from 'react';
import categorias from '../../data/categorias';
import Categoria from '../Categoria/Categoria';
import style from './Categorias.module.css';

export class Categorias extends Component {
  render() {
    return (
      <div className={style.tarjeta}>
        {
          categorias.map(categoria => (
            <Categoria 
              key={categoria.id}
              nombre={categoria.nombre}
              imagen={categoria.imagen}
            />
          ))
        }
      </div>
    )
  }
}

export default Categorias;