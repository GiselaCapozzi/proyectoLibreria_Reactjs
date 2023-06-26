import { useState, useEffect } from 'react';
import style from './CardFrase.module.css';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const CardFrase = () => {

  const [frases, setFrases] = useState();
  const db = getFirestore();

  useEffect(() => {
    const obtenerFrases = async () => {
      try {
        const frasesRef = await getDocs(collection(db, 'frases'))
        const docs = [];
        frasesRef.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id })
        });
        setFrases(docs)
      } catch (error) {
        console.log(error)
      }
    }
    obtenerFrases()
  }, []);

  return (
    <div className={`${style.container}`}>
      {
        frases !== undefined ? (
          frases.map(f => (
            <div className={`${style.card}`} key={f.id}>
              <div className={`${style.texto}`}>
                <h3 className={`${style.frase}`}>{f.frase.frase}</h3>
                <h4 className={`${style.autor}`}>{f.frase.autor}</h4>
              </div>
            </div>
          ))
        ) : (
          <p>No hay frase que mostrar aún</p>
        )
      }
    </div>
  )
}

export default CardFrase