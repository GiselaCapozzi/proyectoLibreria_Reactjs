import { useEffect, useState } from 'react';
import style from './FormFrases.module.css';
import { app } from '../../firebase/InitConfig';
import { getFirestore, doc, setDoc, getDocs, collection, query } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

const FormFrases = () => {
  const db = getFirestore(app);

  const [frase, setFrase] = useState({
    autor: '',
    frase: ''
  });
  const [listFrase, setListFrase] = useState([]);

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

  console.log(listFrase);

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
        listFrase === [] ? (
          <h3>No hay frases aún</h3>
        ) : (
          <div className={`${style.tabla_frases}`}>
        <table className={`table table-striped table-hover table-bordered border-primary`}>
          <thead>
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
                  <td>
                    <button className={`btn btn-success`}><span className={`bi bi-pencil`}></span></button>
                    <button className={`btn btn-danger`}><span className={`bi bi-trash`}></span></button>
                  </td>
                </tr>
              </tbody>
            ))
          }
        </table>
      </div>
        )
      }
    </div>
  )
}

export default FormFrases