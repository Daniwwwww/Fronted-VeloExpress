
import { Link } from 'react-router-dom';
import '../css/Home.css';

import logo from '../assets/Logo.png';
import mecanicos from '../assets/Mecanicos.JPG';
import lavaderos from '../assets/Lavaderos.JPG';
import gruas from '../assets/Gruas.JPG';
import montallantas from '../assets/Montallantas.JPG';

const servicios = [
  {
    nombre: 'Mecánicos',
    imagen: mecanicos,
    descripcion: 'Soluciones y reparaciones para tu vehículo.',
    icono: '🔧'
  },
  {
    nombre: 'Lavaderos',
    imagen: lavaderos,
    descripcion: 'Mantén tu vehículo limpio y reluciente.',
    icono: '🚘'
  },
  {
    nombre: 'Grúas',
    imagen: gruas,
    descripcion: 'Asistencia cuando más la necesitas.',
    icono: '🚨'
  },
  {
    nombre: 'Montallantas',
    imagen: montallantas,
    descripcion: 'Soluciones para tus llantas y neumáticos.',
    icono: '🛞'
  }
];

const beneficios = [
  {
    icono: '🔎',
    titulo: 'Fácil de encontrar',
    descripcion: 'Explora diferentes categorías de servicios automotrices desde un solo lugar.'
  },
  {
    icono: '⚡',
    titulo: 'Ahorra tiempo',
    descripcion: 'Encuentra rápidamente el tipo de servicio que necesita tu vehículo.'
  },
  {
    icono: '🚗',
    titulo: 'Todo para tu vehículo',
    descripcion: 'Accede a diferentes opciones de atención y cuidado automotriz.'
  },
  {
    icono: '👤',
    titulo: 'Tu cuenta personal',
    descripcion: 'Regístrate para acceder a tu espacio personal en VELOEXPRESS.'
  }
];

const pasos = [
  {
    numero: '01',
    icono: '👤',
    titulo: 'Crea tu cuenta',
    descripcion: 'Regístrate en VELOEXPRESS para comenzar a explorar.'
  },
  {
    numero: '02',
    icono: '🔍',
    titulo: 'Explora los servicios',
    descripcion: 'Conoce las categorías disponibles para tu vehículo.'
  },
  {
    numero: '03',
    icono: '🚘',
    titulo: 'Encuentra lo que necesitas',
    descripcion: 'Busca la opción que mejor se adapte a tus necesidades.'
  }
];

export default function Home() {
  return (
    <div className="home-page">

      <header className="home-header">
        <Link to="/" className="home-logo-link">
          <img src={logo} alt="VELOEXPRESS" />
        </Link>

        <nav>
          <a href="#servicios">Servicios</a>
          <a href="#beneficios">Beneficios</a>
          <a href="#como-funciona">Cómo funciona</a>
          <Link to="/login" className="home-login">
            Iniciar sesión
          </Link>
          <Link to="/register" className="home-register">
            Registrarse
          </Link>
        </nav>
      </header>

      <main>

        {/* PORTADA */}
        <section className="home-hero">
          <div className="home-hero-content">
            <span className="home-tag">
              BIENVENIDO A VELOEXPRESS
            </span>

            <h1>
              Tu vehículo merece
              <span> el mejor servicio.</span>
            </h1>

            <p>
              Encuentra mecánicos, lavaderos, grúas y montallantas
              en un solo lugar. Todo lo que necesitas para seguir tu camino.
            </p>

            <div className="home-hero-buttons">
              <Link to="/register" className="home-button">
                Comenzar ahora →
              </Link>

              <Link to="/login" className="home-secondary-button">
                Ya tengo una cuenta
              </Link>
            </div>

            <div className="home-hero-note">
              <span>✓</span> Una plataforma pensada para cuidar tu vehículo.
            </div>
          </div>

          <div className="home-hero-decoration">
            <div className="hero-circle">
              🚘
            </div>
            <span className="hero-floating hero-floating-one">🔧</span>
            <span className="hero-floating hero-floating-two">🛞</span>
            <span className="hero-floating hero-floating-three">🚨</span>
          </div>
        </section>

        {/* CATEGORÍAS */}
        <section className="home-services" id="servicios">
          <div className="home-section-heading">
            <span>EXPLORA VELOEXPRESS</span>
            <h2>Todo lo que tu vehículo necesita</h2>
            <p>
              Encuentra diferentes categorías de servicios automotrices.
            </p>
          </div>

          <div className="home-grid">
            {servicios.map((servicio) => (
              <Link
                to="/login"
                className="home-card"
                key={servicio.nombre}
                aria-label={`Inicia sesión para conocer más sobre ${servicio.nombre}`}
              >
                <div className="home-card-image">
                  <img src={servicio.imagen} alt={servicio.nombre} />

                  <div className="home-card-overlay">
                    <span>INICIA SESIÓN</span>
                    <h3>Conoce más</h3>
                    <p>Inicia sesión para saber más</p>
                    <span className="overlay-arrow">→</span>
                  </div>
                </div>

                <div className="home-card-info">
                  <div className="home-card-icon">{servicio.icono}</div>
                  <h3>{servicio.nombre}</h3>
                  <p>{servicio.descripcion}</p>
                  <span className="home-card-link">
                    Descubrir servicio →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* BENEFICIOS */}
        <section className="home-benefits" id="beneficios">
          <div className="home-section-heading">
            <span>¿POR QUÉ VELOEXPRESS?</span>
            <h2>Una forma más sencilla de encontrar servicios</h2>
            <p>
              Queremos hacer más fácil el cuidado y mantenimiento de tu vehículo.
            </p>
          </div>

          <div className="benefits-grid">
            {beneficios.map((beneficio) => (
              <article className="benefit-card" key={beneficio.titulo}>
                <div className="benefit-icon">{beneficio.icono}</div>
                <h3>{beneficio.titulo}</h3>
                <p>{beneficio.descripcion}</p>
              </article>
            ))}
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section className="home-how" id="como-funciona">
          <div className="home-section-heading">
            <span>ES MUY SENCILLO</span>
            <h2>¿Cómo funciona VELOEXPRESS?</h2>
            <p>
              Comienza a explorar nuestra plataforma en tres sencillos pasos.
            </p>
          </div>

          <div className="steps-grid">
            {pasos.map((paso) => (
              <article className="step-card" key={paso.numero}>
                <span className="step-number">{paso.numero}</span>
                <div className="step-icon">{paso.icono}</div>
                <h3>{paso.titulo}</h3>
                <p>{paso.descripcion}</p>
              </article>
            ))}
          </div>
        </section>

        {/* LLAMADO A REGISTRARSE */}
        <section className="home-callout">
          <div className="callout-decoration">V</div>

          <div className="home-callout-content">
            <span>EMPIEZA TU EXPERIENCIA</span>
            <h2>Tu próximo servicio está a un clic.</h2>
            <p>
              Crea tu cuenta y descubre todo lo que VELOEXPRESS
              tiene para ofrecerte.
            </p>
          </div>

          <Link to="/register" className="home-button">
            Crear mi cuenta →
          </Link>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="home-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <img src={logo} alt="VELOEXPRESS" />
            <p>
              Tu camino, nuestra prioridad.
              Encuentra todo lo que necesitas para tu vehículo.
            </p>
          </div>

          <div className="footer-links">
            <h3>Navegación</h3>
            <a href="#servicios">Servicios</a>
            <a href="#beneficios">Beneficios</a>
            <a href="#como-funciona">Cómo funciona</a>
          </div>

          <div className="footer-links">
            <h3>Tu cuenta</h3>
            <Link to="/login">Iniciar sesión</Link>
            <Link to="/register">Crear una cuenta</Link>
          </div>

          <div className="footer-links">
            <h3>VELOEXPRESS</h3>
            <p>Una plataforma para encontrar servicios automotrices.</p>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 VELOEXPRESS - Todos los derechos reservados.
        </div>
      </footer>

    </div>
  );
}
