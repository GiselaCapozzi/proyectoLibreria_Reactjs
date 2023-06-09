import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail
} from 'firebase/auth';
import { auth, app } from '../firebase/InitConfig';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error('No hay un proveedor de autentificación')
  return context;
}

export function AuthProvider({ children, checked }) {
  const firestore = getFirestore(app)
  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(true);
  const [usuario, setUsuario] = useState();

  const obtenerDatosUsuario = async () => {
    const db = getFirestore();
    const docRef = doc(db, 'usuarios', user.uid);
    try {
      await getDoc(docRef)
        .then((res) => {
          setUsuario(res.data())
        })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    obtenerDatosUsuario();
  }, []);

  console.log(usuario)

  const signup = async (email, password, photouser, username, admin) => {
    const infoUsuario = await createUserWithEmailAndPassword(auth, email, password, photouser, username)
      .then((usuarioFirebase) => {
        return usuarioFirebase;
      });

    console.log(infoUsuario.user.uid);
    const docuRef = doc(firestore, `usuarios/${infoUsuario.user.uid}`);
    setDoc(docuRef, {
      email: email,
      username: username,
      photouser: photouser,
      admin: admin
    })
  }

  const login = (email, password) => signInWithEmailAndPassword(auth, email, password)

  const logout = () => signOut(auth)

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider)
  }

  const resetPassword = async (email) => sendPasswordResetEmail(auth, email)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(true);
      }
    });

    return () => unsubscribe();
  })
  return <authContext.Provider value={{ signup, login, user, logout, loginWithGoogle, resetPassword, usuario, checked }}>{children}</authContext.Provider>;
}
