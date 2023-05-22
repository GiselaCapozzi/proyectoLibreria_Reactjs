import style from './Footer.module.css';

import { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div className={`${style.contenedor}`}>
        <div className={`${style.flex_container} ${style.flex_end}`}>
          <div className={`${style.footer_novedades}`}>
            <h4>Recibir Novedades y Promociones</h4>
            <input type="email" name="" id="" />
            <button>Suscribirse</button>
          </div>
          <div className={`${style.footer_seccion}`}>
            <div className={`${style.footer_categoria}`}>
              <section>
                <p>CATEGORIAS LIBROS</p>
              </section>
            </div>
            <div className={`${style.footer_contacto}`}>
              <section>Quienes somos</section>
            </div>
            <div className={`${style.footer_micuenta}`}>
              <section>MI CUENTA</section>
            </div>
            <div className={`${style.footer_seguinos}`}>
              <section>SEGUINOS</section>
            </div>
          </div>
          <div className={`${style.footer_derechos}`}>
            <h3>©All Rights Reserved</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer