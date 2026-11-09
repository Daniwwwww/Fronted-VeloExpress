import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registrar } from '../services/auth';

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: '',
    correo: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [cargando, setCargando] = useState(false);

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setCargando(true);

    try {
      await registrar(form);
      navigate('/login');
    } catch (err) {
      setError(
        err.response?.data?.msg ||
        err.response?.data?.message ||
        'No se pudo registrar el usuario'
      );
    } finally {
      setCargando(false);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Crear cuenta</h1>

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

      <p>
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={onChange}
          placeholder="Contraseña"
          required
        />
      </p>

      <button type="submit" disabled={cargando}>
        {cargando ? 'Registrando...' : 'Registrarme'}
      </button>

      <p>
        ¿Ya tienes cuenta? <Link to="/login">Ingresa</Link>
      </p>
    </form>
  );
}
