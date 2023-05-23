import { Component } from 'react';
import style from './Footer.module.css';
import { Link } from 'react-router-dom';

import { categorias } from '../../data/categorias';
import instagram from '../../assets/instagram.png';
import youtube from '../../assets/youtube.png';
import facebook from '../../assets/facebook(1).png';
import twitter from '../../assets/twitter.png';
export class Footer extends Component {
  
  render() {
    return (
      <div className={`${style.contenedor}`}>
        <div className={`${style.flex_container} ${style.flex_end}`}>
          <div className={`${style.footer_novedades}`}>
            <h4>Recibir Novedades y Promociones</h4>
            <div className={`${style.suscribe}`}>
            <label className='form-label' htmlFor='formControl'>Email</label>
            <input className='form-control' type="email" id='formControl' placeholder='Email' />
            <button className='btn btn-primary'>Suscribirse</button>
            </div>
          </div>
          <div className={`${style.footer_seccion}`}>
            <div className={`${style.footer_categoria}`}>
              <section>
                <p>CATEGORIAS LIBROS</p>
                <div className={`${style.contenedor_categoria}`}>
                {
                  categorias.map(categoria => (
                    <Link 
                      key={categoria.id}
                      className={style.lista_categoria}
                    >{categoria.nombre}</Link>
                  ))
                }
                </div>
              </section>
            </div>
            <div className={`${style.footer_contacto}`}>
              <section>
                <p><Link>Quienes somos</Link></p>
                <p><Link>Terminos y Condiciones</Link></p>
                <p><Link>Privacidad</Link></p>
                <p><Link>Top Libros</Link></p>
                <p><Link>Contacto</Link></p>
              </section>
            </div>
            <div className={`${style.footer_micuenta}`}>
              <section>
              <p>MI CUENTA</p>
              <p><Link>Ingresar</Link></p>
              <p><Link>Ver Carrito</Link></p>
              <p><Link>Favoritos</Link></p>
              <p><Link>Finalizar Compra</Link></p>
              </section>
            </div>
            <div className={`${style.footer_seguinos}`}>
              <h5>SEGUINOS</h5>
              <section className={`${style.seguinos_logos}`}>
                <img src={instagram} alt='instagram' />
                <img src={youtube} alt="youtube" />
                <img src={facebook} alt="facebook" />
                <img src={twitter} alt="twitter" />
              </section>
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

export default Footer;