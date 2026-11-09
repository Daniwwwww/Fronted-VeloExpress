import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
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
      await login(form.correo, form.password);
      navigate('/dashboard');
    } catch (err) {
      setError(
        err.response?.data?.msg ||
        err.response?.data?.message ||
        'No se pudo iniciar sesión'
      );
    } finally {
      setCargando(false);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Iniciar sesión</h1>

      {error && <p style={{ color: 'red' }}>{error}</p>}

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
        {cargando ? 'Ingresando...' : 'Ingresar'}
      </button>

      <p>
        ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
      </p>
    </form>
  );
}
