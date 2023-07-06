import { useState, useEffect } from 'react';
import style from './CardFrase.module.css';
import { collection, getDocs, getFirestore, onSnapshot, query } from 'firebase/firestore';
import { useAuth } from '../../context/authContext';

const CardFrase = () => {
  const [frases, setFrases] = useState([]);
  const db = getFirestore();

  const { checked } = useAuth();

  useEffect(() => {
    const q = query(collection(db, 'frases'))
    onSnapshot(q, (querySnapshot) => {
      setFrases(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  }, []);

  return (
    <div className={`${style.container}`}>
      <div className={`${style.container_card}`}>
        {
          frases !== undefined ? (
            frases.map(f => (
              <div className={`${style.card}`} key={f.id}>
                {
                  checked ? (
                    <div className={`${style.texto_dark}`}>
                      <h3 className={`${style.frase_dark}`}>{f.data.frase}</h3>
                      <h4 className={`${style.autor_dark}`}>{f.data.autor}</h4>
                    </div>
                  ) :
                    (
                      <div className={`${style.texto_light}`}>
                        <h3 className={`${style.frase_light}`}>{f.data.frase}</h3>
                        <h4 className={`${style.autor_light}`}>{f.data.autor}</h4>
                      </div>
                    )
                }

              </div>
            ))
          ) : (
            <p>No hay frase que mostrar aún</p>
          )
        }
      </div>
    </div>
  )
}

export default CardFrase