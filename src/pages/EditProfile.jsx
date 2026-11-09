import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { actualizarPerfil, obtenerPerfil } from '../services/auth';

export default function EditProfile() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: user?.nombre || '',
    correo: user?.correo || ''
  });

  const [error, setError] = useState('');

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      if (!user?.id) {
        setError('No se encontró el usuario.');
        return;
      }

      await actualizarPerfil(user.id, form);

      const respuesta = await obtenerPerfil();
      setUser(respuesta.data || respuesta);

      navigate('/perfil');
    } catch (err) {
      setError(
        err.response?.data?.msg ||
        err.response?.data?.message ||
        'No se pudo actualizar el perfil. Verifica la conexión.'
      );
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Editar perfil</h1>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <p>
        <input
          name="nombre"
          type="text"
          value={form.nombre}
          onChange={onChange}
          placeholder="Nombre"
          required
        />
      </p>

      <p>
        <input
          name="correo"
          type="email"
          value={form.correo}
          onChange={onChange}
          placeholder="Correo electrónico"
          required
        />
      </p>

      <button type="submit">Guardar cambios</button>{' '}

      <button
        type="button"
        onClick={() => navigate('/perfil')}
      >
        Cancelar
      </button>
    </form>
  );
}
