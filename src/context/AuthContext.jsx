import { createContext, useContext, useEffect, useState } from 'react';
import { iniciarSesion } from '../services/auth';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

// Leer los datos que vienen dentro del token
const obtenerDatosToken = (token) => {
  try {
    const payload = token.split('.')[1];
    const datos = JSON.parse(atob(payload.replace(/-/g, '+').replace(/_/g, '/')));

    if (datos.exp && datos.exp * 1000 < Date.now()) {
      return null;
    }

    return {
      id: datos.id,
      correo: datos.correo
    };
  } catch {
    return null;
  }
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  // Revisar si existe una sesión guardada
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      const usuario = obtenerDatosToken(token);

      if (usuario) {
        setUser(usuario);
      } else {
        logout();
      }
    }

    setLoading(false);
  }, []);

  // Iniciar sesión
  const login = async (correo, password) => {
    const respuesta = await iniciarSesion(correo, password);
    const token = respuesta.token;

    if (!token) {
      throw new Error('No se recibió el token');
    }

    const usuario = obtenerDatosToken(token);

    if (!usuario) {
      throw new Error('El token recibido no es válido');
    }

    localStorage.setItem('token', token);
    setUser(usuario);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
