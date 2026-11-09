
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute() {
  const { user, loading } = useAuth();

  // Mientras se verifica la sesión
  if (loading) {
    return <p>Cargando...</p>;
  }

  // Si existe un usuario, permite entrar
  // Si no existe, lo envía al login
  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );
}
