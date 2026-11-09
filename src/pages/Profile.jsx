
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const cerrarSesion = () => {
    logout();
    navigate('/login');
  };

  return (
    <div>
      <h1>Mi perfil</h1>

      {user ? (
        <>
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Correo:</strong> {user.correo}</p>

          <p>
            <Link to="/perfil/editar">
              Editar perfil
            </Link>
          </p>

          <button onClick={cerrarSesion}>
            Cerrar sesión
          </button>
        </>
      ) : (
        <p>No hay información del usuario.</p>
      )}
    </div>
  );
}
