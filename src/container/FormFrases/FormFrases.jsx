import { useEffect, useState, useRef } from 'react';
import style from './FormFrases.module.css';
import { doc, setDoc, getDocs, collection } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../../firebase/InitConfig';
import Modals from '../../components/Modals/Modals';

const FormFrases = () => {

  const [frase, setFrase] = useState({
    autor: '',
    frase: ''
  });
  const [listFrase, setListFrase] = useState([]);
  const [show, setShow] = useState(false);
  const [mensaje, setMensaje] = useState({
    titulo: '',
    autor: '',
    frase: ''
  })

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (e) => {
    setShow(true);
    if (e.target.id === 'button_editar') {
      const lineaAutor = e.target.parentElement.parentElement.parentElement.children[0].innerText;
      const lineaFrase = e.target.parentElement.parentElement.parentElement.children[1].innerText;
      setMensaje({
        titulo: 'Editar',
        autor: lineaAutor,
        frase: lineaFrase,
      })
    } else if (e.target.id === 'button_eliminar') {
      setMensaje({
        titulo: 'Eliminar',
        autor: '',
        frase: ''
      })
    } else {
      setMensaje({
        titulo: '',
        autor: '',
        frase: ''
      })
    }
  }

  const handleChange = ({ target: { name, value } }) => {
    setFrase({
      ...frase,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const docuRef = doc(db, `frases/${uuidv4()}`);
    await setDoc(docuRef, {
      frase
    })
    e.target.reset();
  }

  const mostrarDatos = (e) => {
    console.log(e.currentTarget.innerText)
  }

  useEffect(() => {
    const obtenerFrases = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'frases'))
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id })
        })
        setListFrase(docs)
      } catch (error) {
        console.log(error)
      }
    }
    obtenerFrases();
  }, [])

  return (
    <div className={`${style.container}`}>
      <div className={`${style.formualrio}`}>
        <form onSubmit={handleSubmit}>
          <div>
            <label className={`form-label`}>Autor</label>
            <input
              className={`form-control ${style.form_autor}`}
              type='text'
              name='autor'
              onChange={handleChange}
            />
          </div>
          <div>
            <label className={`form-label`}>Frase</label>
            <textarea
              className={`form-control ${style.form_frase}`}
              name='frase'
              onChange={handleChange}
            ></textarea>
          </div>
          <input
            className={`btn btn-primary ${style.boton}`}
            type='submit' value='Enviar'
          />
        </form>
      </div>
      {
        !listFrase ? (
          <h3>No hay frases aún</h3>
        ) : (
          <div className={`${style.tabla_frases}`}>
            <table className={`table table-striped table-hover table-bordered border-primary`}>
              <thead className={`${style.tabla_titulo}`}>
                <tr>
                  <th scope='col'>Autor</th>
                  <th scope='col'>Frase</th>
                  <th scope='col'>Editar</th>
                </tr>
              </thead>
              {
                listFrase.map(frase => (
                  <tbody key={frase.id}>
                    <tr>
                      <td>{frase.frase.autor}</td>
                      <td>{frase.frase.frase}</td>
                      <td className={`${style.botones}`}>
                        <div className={`${style.contenedor_botones}`}>
                          <button
                            className={`btn btn-success`}
                            onClick={handleShow}
                            id='button_editar'
                          >
                          Editar
                          </button>
                          <button
                            className={`btn btn-danger`}
                            onClick={handleShow}
                            id='button_eliminar'
                          >
                          Eliminar
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                ))
              }
            </table>
            <Modals
              show={show}
              handleClose={handleClose}
              mensaje={mensaje}
              frase={frase}
            />
          </div>
        )
      }
      <div>

      </div>

    </div>
  )
}

export default FormFrases