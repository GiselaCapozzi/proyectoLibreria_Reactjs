import { useEffect, useState } from 'react';
import style from './FormFrases.module.css';
import { doc, collection, deleteDoc, addDoc, query, orderBy, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/InitConfig';
import Modals from '../../components/Modals/Modals';

const FormFrases = () => {

  const [frase, setFrase] = useState({
    autor: '',
    frase: ''
  });
  const [frases, setFrases] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  // const [show, setShow] = useState(false);
  // const [mensaje, setMensaje] = useState({
  //   titulo: '',
  //   autor: '',
  //   frase: ''
  // })
  // const [modifFrase, setModifFrase] = useState('');
  // const [modifAutor, setModifAutor] = useState('');

  useEffect(() => {
    const q = query(collection(db, 'frases'), orderBy('autor'))
    onSnapshot(q, (querySnapshot) => {
      if (querySnapshot.docs) {
        setFrases(querySnapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        })))
      } else {
        setFrases([]);
      }
    })

  }, [frase])

  const handleChange = ({ target: { name, value } }) => {
    setFrase({
      ...frase,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
      try {
        await addDoc(collection(db, 'frases'), {
          autor: frase.autor,
          frase: frase.frase
        })
      } catch (error) {
        console.log(error)
      }
      setFrase({
        autor: '',
        frase: ''
      })
  }

  const collectionRef = collection(db, 'frases');

  const borrarFrase = async (frase) => {
    const fraseDocRef = doc(collectionRef, frase.id)
    try {
      await deleteDoc(fraseDocRef);
    } catch (error) {
      console.log(error)
    }
  }

  const actualizarFrase = async (e, frase) => {
    const fraseDocRef = doc(db, 'frases', frase.id);
      try {
        await updateDoc(fraseDocRef, {
          autor: modifAutor,
          frase: modifFrase
        })
      } catch (error) {
        console.log(error)
      }
      e.target.reset();
  }

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = async (e, frase) => {
    setShow(true);
    // if (e.target.id === 'button_editar') {
    //   const lineaAutor = e.target.parentElement.parentElement.parentElement.children[0].innerText;
    //   const lineaFrase = e.target.parentElement.parentElement.parentElement.children[1].innerText;
    //   setMensaje({
    //     titulo: 'Editar',
    //     // autor: '' || modifAutor,
    //     // frase: '' || modifFrase,
    //   })
    // }
    // const fraseDocRef = doc(db, 'frases', frase.id);
    // try {
    //   if (lineaAutor.length >= 1 && lineaFrase >= 1) {
    //     await updateDoc(fraseDocRef, {
    //       autor: lineaAutor,
    //       frase: lineaFrase
    //     })
    //   } else {
    //     await updateDoc(fraseDocRef, {
    //       autor: modifAutor,
    //       frase: modifFrase
    //     })
    //   }
    // } catch (error) {
    //   console.log(error)
    // }
  }

  console.log(frases)

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
              value={frase.autor}
            />
          </div>
          <div>
            <label className={`form-label`}>Frase</label>
            <textarea
              className={`form-control ${style.form_frase}`}
              name='frase'
              onChange={handleChange}
              value={frase.frase}
            ></textarea>
          </div>
          <button type='submit' className={`btn btn-primary ${style.boton}`}>
            {
              isEditing ? 'Actualizar' : 'Crear'
            }
          </button>
          {/* <input
            className={`btn btn-primary ${style.boton}`}
            type='submit' value='Enviar'
          /> */}
        </form>
      </div>
      {
        !frase ? (
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
                frases.map(frase => (
                  <tbody key={frase.id}>
                    <tr>
                      <td>{frase.data.autor}</td>
                      <td>{frase.data.frase}</td>
                      <td className={`${style.botones}`}>
                        <div className={`${style.contenedor_botones}`}>
                          <button
                            className={`btn btn-success`}
                            onClick={(e) => actualizarFrase(e, frase)}
                            id='button_editar'
                          >
                            Editar
                          </button>
                          <button
                            className={`btn btn-danger`}
                            onClick={() => borrarFrase(frase)}
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
            {/* <Modals
              show={show}
              handleClose={handleClose}
              mensaje={mensaje}
              frase={frase}
              setModifAutor={setModifAutor}
              setModifFrase={setModifFrase}
              modifAutor={modifAutor}
              modifFrase={modifFrase}
            /> */}
          </div>
        )
      }
      <div>

      </div>

    </div>
  )
}

export default FormFrases