
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';

export default function App() {
  const { user, logout, loading } = useAuth();

  if (loading) {
    return <p>Cargando aplicación...</p>;
  }

  return (
    <>
      <nav style={{ display: 'flex', gap: 16, padding: 16 }}>
        {user ? (
          <>
            <Link to="/perfil">Mi perfil</Link>

            <button onClick={logout}>
              Salir
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Ingresar</Link>
            <Link to="/register">Registrarse</Link>
          </>
        )}
      </nav>

      <main style={{ padding: 16 }}>
        <Routes>
          <Route
            path="/"
            element={
              <Navigate
                to={user ? '/perfil' : '/login'}
                replace
              />
            }
          />

          <Route
            path="/login"
            element={
              user ? <Navigate to="/perfil" replace /> : <Login />
            }
          />

          <Route
            path="/register"
            element={
              user ? <Navigate to="/perfil" replace /> : <Register />
            }
          />

          <Route element={<ProtectedRoute />}>
            <Route path="/perfil" element={<Profile />} />
            <Route path="/perfil/editar" element={<EditProfile />} />

            {/* Aquí irán las rutas protegidas del CRUD */}
          </Route>

          <Route
            path="*"
            element={<p>Página no encontrada</p>}
          />
        </Routes>
      </main>
    </>
  );
}
