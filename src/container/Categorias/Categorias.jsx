import { Component } from 'react';
import { categorias } from '../../data/categorias';
import Categoria from '../../components/Categoria/Categoria';
import style from './Categorias.module.css';

export class Categorias extends Component {
  render() {
    return (
      <div className={style.tarjeta}>
          {
            categorias.map(categoria => (
              <Categoria 
                imagen={categoria.imagen}
                nombre={categoria.nombre}
                key={categoria.id}
              />
            ))
          }
      </div>
    )
  }
}

export default Categorias;