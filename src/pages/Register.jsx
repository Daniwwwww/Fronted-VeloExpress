
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registrar } from '../services/auth';
import logo from '../assets/Logo.png';
import '../css/Auth.css';

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: '',
    correo: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [cargando, setCargando] = useState(false);
  const [mostrarPassword, setMostrarPassword] = useState(false);

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
    <div className="auth-page">

      <section className="auth-banner">
        <img src={logo} alt="VELOEXPRESS" />

        <div className="auth-banner-content">
          <span className="auth-tag">ÚNETE A VELOEXPRESS</span>
          <h1>Todo lo que necesitas para tu vehículo.</h1>
          <p>
            Crea tu cuenta y descubre una nueva forma
            de encontrar servicios automotrices.
          </p>
        </div>

        <div className="auth-banner-footer">
          VELOEXPRESS · Tu camino, nuestra prioridad.
        </div>
      </section>

      <section className="auth-form-section">
        <Link to="/" className="auth-back">
          ← Volver al inicio
        </Link>

        <div className="auth-card">
          <span className="auth-subtitle">COMIENZA HOY</span>
          <h2>Crear una cuenta</h2>
          <p className="auth-description">
            Regístrate para comenzar a disfrutar de nuestros servicios.
          </p>

          {error && <div className="auth-error">{error}</div>}

          <form onSubmit={onSubmit}>
            <label htmlFor="nombre">Nombre completo</label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              value={form.nombre}
              onChange={onChange}
              placeholder="Ingresa tu nombre"
              required
            />

            <label htmlFor="correo">Correo electrónico</label>
            <input
              id="correo"
              name="correo"
              type="email"
              value={form.correo}
              onChange={onChange}
              placeholder="ejemplo@correo.com"
              required
            />

            <label htmlFor="password">Contraseña</label>
            <div className="auth-password">
              <input
                id="password"
                name="password"
                type={mostrarPassword ? 'text' : 'password'}
                value={form.password}
                onChange={onChange}
                placeholder="Crea una contraseña"
                required
              />

              <button
                type="button"
                className="auth-show-password"
                onClick={() => setMostrarPassword(!mostrarPassword)}
              >
                {mostrarPassword ? 'Ocultar' : 'Mostrar'}
              </button>
            </div>

            <button
              type="submit"
              className="auth-submit"
              disabled={cargando}
            >
              {cargando ? 'Registrando...' : 'Crear mi cuenta'}
            </button>
          </form>

          <p className="auth-switch">
            ¿Ya tienes una cuenta?
            <Link to="/login"> Inicia sesión</Link>
          </p>
        </div>
      </section>

    </div>
  );
}
