
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import Dashboard from './pages/Dashboard';

export default function App() {
  const { user, logout, loading } = useAuth();

  if (loading) {
    return <p>Cargando aplicación...</p>;
  }

  return (
    <>
      {!user && (
        <nav style={{ display: 'flex', gap: 16, padding: 16 }}>
          <Link to="/login">Ingresar</Link>
          <Link to="/register">Registrarse</Link>
        </nav>
      )}

      <Routes>
        <Route
          path="/"
          element={
            <Navigate to={user ? '/dashboard' : '/login'} replace />
          }
        />

        <Route
          path="/login"
          element={user ? <Navigate to="/dashboard" replace /> : <Login />}
        />

        <Route
          path="/register"
          element={user ? <Navigate to="/dashboard" replace /> : <Register />}
        />

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/perfil/editar" element={<EditProfile />} />
        </Route>

        <Route path="*" element={<p>Página no encontrada</p>} />
      </Routes>
    </>
  );
}
