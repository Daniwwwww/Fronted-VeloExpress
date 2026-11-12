
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
    descripcion: 'Soluciones y reparaciones para que tu vehículo siga funcionando.',
    icono: '🔧',
    numero: '01'
  },
  {
    nombre: 'Lavaderos',
    imagen: lavaderos,
    descripcion: 'Dale a tu vehículo el cuidado y la limpieza que merece.',
    icono: '🚘',
    numero: '02'
  },
  {
    nombre: 'Grúas',
    imagen: gruas,
    descripcion: 'Asistencia y apoyo cuando más lo necesitas en el camino.',
    icono: '🚨',
    numero: '03'
  },
  {
    nombre: 'Montallantas',
    imagen: montallantas,
    descripcion: 'Encuentra soluciones para tus llantas y neumáticos.',
    icono: '🛞',
    numero: '04'
  }
];

const beneficios = [
  {
    icono: '⌕',
    titulo: 'Encuentra fácilmente',
    descripcion: 'Explora diferentes categorías de servicios automotrices desde un solo lugar.'
  },
  {
    icono: '⚡',
    titulo: 'Ahorra tiempo',
    descripcion: 'Encuentra rápidamente el servicio que necesita tu vehículo.'
  },
  {
    icono: '🚗',
    titulo: 'Todo en un solo lugar',
    descripcion: 'Accede a distintas opciones para el cuidado de tu vehículo.'
  },
  {
    icono: '♙',
    titulo: 'Tu espacio personal',
    descripcion: 'Crea tu cuenta y disfruta de tu propio espacio en VELOEXPRESS.'
  }
];

const pasos = [
  {
    numero: '01',
    icono: '♙',
    titulo: 'Crea tu cuenta',
    descripcion: 'Regístrate en VELOEXPRESS para comenzar tu experiencia.'
  },
  {
    numero: '02',
    icono: '⌕',
    titulo: 'Explora los servicios',
    descripcion: 'Conoce las categorías disponibles para tu vehículo.'
  },
  {
    numero: '03',
    icono: '🚘',
    titulo: 'Encuentra lo que necesitas',
    descripcion: 'Descubre la opción que mejor se adapta a ti.'
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
            Crear cuenta <span>↗</span>
          </Link>
        </nav>
      </header>

      <main>

        {/* PORTADA */}
        <section className="home-hero">
          <div className="home-hero-content">
            <div className="home-tag">
              <span className="tag-dot"></span>
              TU CAMINO COMIENZA AQUÍ
            </div>

            <h1>
              Tu vehículo,
              <span> siempre en</span>
              <span className="hero-orange-text"> buenas manos.</span>
            </h1>

            <p>
              Mecánicos, lavaderos, grúas y montallantas.
              Encuentra todo lo que necesitas para tu vehículo
              en un solo lugar.
            </p>

            <div className="home-hero-buttons">
              <Link to="/register" className="home-button">
                Comenzar ahora <span>→</span>
              </Link>

              <Link to="/login" className="home-secondary-button">
                Ya tengo una cuenta
              </Link>
            </div>

            <div className="home-hero-note">
              <span>✓</span>
              Una plataforma pensada para acompañarte en cada kilómetro.
            </div>
          </div>

          <div className="home-hero-decoration">
            <div className="hero-orbit hero-orbit-one"></div>
            <div className="hero-orbit hero-orbit-two"></div>
            <div className="hero-main-circle">
              <span>🚘</span>
            </div>
            <div className="hero-floating hero-floating-one">🔧</div>
            <div className="hero-floating hero-floating-two">🛞</div>
            <div className="hero-floating hero-floating-three">🚨</div>
            <div className="hero-decoration-label">
              <strong>VELOEXPRESS</strong>
              <span>Todo para tu vehículo</span>
            </div>
          </div>

          <div className="hero-background-shape"></div>
        </section>

        {/* FRANJA INFORMATIVA */}
        <section className="home-highlights">
          <div>
            <span className="highlight-icon">🔧</span>
            <p><strong>Servicios</strong><small>Automotrices</small></p>
          </div>
          <div>
            <span className="highlight-icon">📍</span>
            <p><strong>Todo en un lugar</strong><small>Fácil de explorar</small></p>
          </div>
          <div>
            <span className="highlight-icon">⚡</span>
            <p><strong>Fácil y rápido</strong><small>Una mejor experiencia</small></p>
          </div>
        </section>

        {/* SERVICIOS */}
        <section className="home-services" id="servicios">
          <div className="home-section-heading">
            <span className="section-eyebrow">EXPLORA VELOEXPRESS</span>
            <h2>Tenemos lo que tu vehículo necesita<span>.</span></h2>
            <p>
              Cuatro categorías para ayudarte a encontrar el servicio
              adecuado en el momento indicado.
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
                  <span className="home-card-number">{servicio.numero}</span>
                  <div className="home-card-image-overlay"></div>
                </div>

                <div className="home-card-info">
                  <div className="home-card-icon">{servicio.icono}</div>
                  <h3>{servicio.nombre}</h3>
                  <p>{servicio.descripcion}</p>
                  <span className="home-card-link">
                    Descubrir servicio <span>↗</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* BENEFICIOS */}
        <section className="home-benefits" id="beneficios">
          <div className="home-section-heading">
            <span className="section-eyebrow">¿POR QUÉ VELOEXPRESS?</span>
            <h2>Hacemos tu camino <span>más fácil.</span></h2>
            <p>
              Una experiencia sencilla para encontrar alternativas
              de cuidado y atención automotriz.
            </p>
          </div>

          <div className="benefits-grid">
            {beneficios.map((beneficio, index) => (
              <article className="benefit-card" key={beneficio.titulo}>
                <span className="benefit-index">0{index + 1}</span>
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
            <span className="section-eyebrow">EMPEZAR ES MUY FÁCIL</span>
            <h2>Tu experiencia en tres pasos<span>.</span></h2>
            <p>
              Entra, explora y encuentra lo que buscas.
              Así de sencillo.
            </p>
          </div>

          <div className="steps-grid">
            {pasos.map((paso) => (
              <article className="step-card" key={paso.numero}>
                <span className="step-number">{paso.numero}</span>
                <div className="step-icon">{paso.icono}</div>
                <h3>{paso.titulo}</h3>
                <p>{paso.descripcion}</p>
                <div className="step-line"></div>
              </article>
            ))}
          </div>
        </section>

        {/* LLAMADO A REGISTRARSE */}
        <section className="home-callout">
          <div className="callout-decoration">V</div>
          <div className="home-callout-content">
            <span>ES HORA DE PONERTE EN MARCHA</span>
            <h2>Tu próximo servicio está a un clic.</h2>
            <p>
              Crea tu cuenta y descubre una forma más sencilla
              de encontrar servicios para tu vehículo.
            </p>
          </div>

          <Link to="/register" className="callout-button">
            Crear mi cuenta <span>→</span>
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
            <span className="footer-slogan">MUÉVETE CON CONFIANZA.</span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 VELOEXPRESS</span>
          <span>Todos los derechos reservados.</span>
        </div>
      </footer>

    </div>
  );
}
