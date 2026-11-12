
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/Logo.png';
import '../css/Auth.css';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
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
    <div className="auth-page">

      <section className="auth-banner">
        <img src={logo} alt="VELOEXPRESS" />

        <div className="auth-banner-content">
          <span className="auth-tag">BIENVENIDO A VELOEXPRESS</span>
          <h1>Tu vehículo merece el mejor servicio.</h1>
          <p>
            Encuentra profesionales, soluciones y servicios
            para tu vehículo en un solo lugar.
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
          <span className="auth-subtitle">NOS ALEGRA VERTE</span>
          <h2>Iniciar sesión</h2>
          <p className="auth-description">
            Ingresa tus datos para continuar.
          </p>

          {error && <div className="auth-error">{error}</div>}

          <form onSubmit={onSubmit}>
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
                placeholder="Ingresa tu contraseña"
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
              {cargando ? 'Ingresando...' : 'Ingresar a mi cuenta'}
            </button>
          </form>

          <p className="auth-switch">
            ¿Todavía no tienes una cuenta?
            <Link to="/register"> Regístrate aquí</Link>
          </p>
        </div>
      </section>

    </div>
  );
}
