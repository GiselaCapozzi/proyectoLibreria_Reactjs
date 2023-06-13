import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/InitConfig';

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error('No hay un proveedor de autentificación')
  return context;
}

export function AuthProvider({ children }) {
const  signup = (email, password) => createUserWithEmailAndPassword(auth, email, password)

  return <authContext.Provider value={{ signup }}>{children}</authContext.Provider>;
}
