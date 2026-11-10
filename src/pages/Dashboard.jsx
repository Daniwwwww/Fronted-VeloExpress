
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import logo from '../assets/Logo.png';
import mecanicos from '../assets/Mecanicos.JPG';
import lavaderos from '../assets/Lavaderos.JPG';
import gruas from '../assets/Gruas.JPG';
import montallantas from '../assets/Montallantas.JPG';

import '../css/Dashboard.css';

const servicios = [
  {
    nombre: 'Mecánicos',
    descripcion: 'Soluciones, revisiones y reparaciones para tu vehículo.',
    imagen: mecanicos,
    icono: '🔧',
    etiqueta: 'MANTENIMIENTO'
  },
  {
    nombre: 'Lavaderos',
    descripcion: 'Limpieza y cuidado para mantener tu vehículo impecable.',
    imagen: lavaderos,
    icono: '🚘',
    etiqueta: 'LIMPIEZA'
  },
  {
    nombre: 'Grúas',
    descripcion: 'Opciones de asistencia y transporte para tu vehículo.',
    imagen: gruas,
    icono: '🚨',
    etiqueta: 'ASISTENCIA'
  },
  {
    nombre: 'Montallantas',
    descripcion: 'Revisión y soluciones para tus llantas y neumáticos.',
    imagen: montallantas,
    icono: '🛞',
    etiqueta: 'LLANTAS'
  }
];

const tareasIniciales = [
  { id: 1, texto: 'Revisar la presión de las llantas', hecha: false },
  { id: 2, texto: 'Comprobar el nivel de aceite', hecha: false },
  { id: 3, texto: 'Revisar las luces del vehículo', hecha: false },
  { id: 4, texto: 'Verificar el estado de la batería', hecha: false }
];

const consejos = [
  {
    icono: '🛞',
    titulo: 'Cuida tus neumáticos',
    descripcion: 'Revisa regularmente la presión y el desgaste de tus llantas.'
  },
  {
    icono: '🛢️',
    titulo: 'Controla el aceite',
    descripcion: 'Consulta el nivel de aceite y sigue los intervalos de mantenimiento.'
  },
  {
    icono: '🔋',
    titulo: 'Presta atención a la batería',
    descripcion: 'Comprueba su estado si notas dificultades al encender el vehículo.'
  }
];

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [busqueda, setBusqueda] = useState('');
  const [categoria, setCategoria] = useState('Todos');
  const [tareas, setTareas] = useState(tareasIniciales);

  const cerrarSesion = () => {
    logout();
    navigate('/');
  };

  const cambiarTarea = (id) => {
    setTareas((actuales) =>
      actuales.map((tarea) =>
        tarea.id === id
          ? { ...tarea, hecha: !tarea.hecha }
          : tarea
      )
    );
  };

  const tareasCompletadas = tareas.filter((tarea) => tarea.hecha).length;
  const progreso = Math.round((tareasCompletadas / tareas.length) * 100);

  const serviciosFiltrados = servicios.filter((servicio) => {
    const coincideBusqueda =
      servicio.nombre.toLowerCase().includes(busqueda.toLowerCase());

    const coincideCategoria =
      categoria === 'Todos' || servicio.nombre === categoria;

    return coincideBusqueda && coincideCategoria;
  });

  return (
    <div className="dashboard">

      {/* MENÚ LATERAL */}
      <aside className="dashboard-sidebar">
        <Link to="/dashboard" className="sidebar-brand">
          <img src={logo} alt="VELOEXPRESS" />
        </Link>

        <div className="sidebar-label">MENÚ PRINCIPAL</div>

        <nav className="sidebar-menu">
          <a href="#inicio" className="sidebar-link active">
            <span>⌂</span>
            Inicio
          </a>

          <a href="#categorias" className="sidebar-link">
            <span>▦</span>
            Servicios
          </a>

          <a href="#mantenimiento" className="sidebar-link">
            <span>✓</span>
            Mi mantenimiento
          </a>

          <a href="#consejos" className="sidebar-link">
            <span>✦</span>
            Consejos
          </a>

          <Link to="/perfil" className="sidebar-link">
            <span>♙</span>
            Mi perfil
          </Link>
        </nav>

        <div className="sidebar-help">
          <div className="sidebar-help-icon">🚗</div>
          <h3>¿Necesitas ayuda?</h3>
          <p>Encuentra la categoría adecuada para tu vehículo.</p>
          <a href="#categorias">Explorar →</a>
        </div>

        <button className="sidebar-logout" onClick={cerrarSesion}>
          <span>↪</span>
          Cerrar sesión
        </button>
      </aside>

      {/* CONTENIDO PRINCIPAL */}
      <main className="dashboard-content">

        {/* BARRA SUPERIOR */}
        <header className="dashboard-topbar">
          <div>
            <span className="topbar-label">ESPACIO PERSONAL</span>
            <h2>Panel de control</h2>
          </div>

          <Link to="/perfil" className="topbar-user">
            <div className="user-avatar">👤</div>
            <div>
              <strong>Mi cuenta</strong>
              <span>{user?.correo || 'Usuario VELOEXPRESS'}</span>
            </div>
            <span className="user-arrow">⌄</span>
          </Link>
        </header>

        {/* BIENVENIDA */}
        <section className="dashboard-hero" id="inicio">
          <div className="hero-content">
            <span className="hero-tag">BIENVENIDO A TU ESPACIO</span>

            <h1>
              ¡Hola, qué gusto
              <span> tenerte aquí!</span>
            </h1>

            <p>
              {user?.correo
                ? `Has iniciado sesión como ${user.correo}.`
                : 'Gestiona tus consultas y descubre los servicios disponibles.'}
            </p>

            <div className="hero-actions">
              <a href="#categorias" className="hero-primary-button">
                Explorar servicios →
              </a>

              <Link to="/perfil" className="hero-outline-button">
                Mi perfil
              </Link>
            </div>
          </div>

          <div className="hero-illustration">
            <div className="hero-car">🚙</div>
            <span className="hero-decoration decoration-one">🔧</span>
            <span className="hero-decoration decoration-two">🛞</span>
            <span className="hero-decoration decoration-three">⚡</span>
            <div className="hero-orbit"></div>
          </div>

          <div className="hero-bottom-text">
            VELOEXPRESS · TU VEHÍCULO, NUESTRA PRIORIDAD
          </div>
        </section>

        {/* TARJETAS INFORMATIVAS */}
        <section className="dashboard-overview">
          <article className="overview-card">
            <div className="overview-icon orange">🔍</div>
            <div>
              <span>EXPLORA</span>
              <h3>4 categorías</h3>
              <p>Servicios disponibles para conocer.</p>
            </div>
          </article>

          <article className="overview-card">
            <div className="overview-icon blue">👤</div>
            <div>
              <span>CUENTA</span>
              <h3>Tu espacio personal</h3>
              <p>Consulta y actualiza tu perfil.</p>
            </div>
          </article>

          <article className="overview-card">
            <div className="overview-icon green">✓</div>
            <div>
              <span>ORGANIZACIÓN</span>
              <h3>{tareasCompletadas} de {tareas.length} tareas</h3>
              <p>Cuidados marcados como completados.</p>
            </div>
          </article>
        </section>

        {/* ACCESO DE ASISTENCIA */}
        <section className="emergency-panel">
          <div className="emergency-icon">🚨</div>

          <div className="emergency-text">
            <span>¿TIENES UN IMPREVISTO?</span>
            <h2>¿Necesitas asistencia para tu vehículo?</h2>
            <p>
              Explora nuestra categoría de grúas y conoce las opciones disponibles.
            </p>
          </div>

          <a
            href="#categorias"
            onClick={() => setCategoria('Grúas')}
            className="emergency-button"
          >
            Ver grúas →
          </a>
        </section>

        {/* CATEGORÍAS */}
        <section className="dashboard-services" id="categorias">
          <div className="section-heading">
            <div>
              <span>ENCUENTRA LO QUE BUSCAS</span>
              <h2>Explora nuestras categorías</h2>
              <p>Selecciona una categoría o busca el servicio que necesitas.</p>
            </div>

            <div className="category-count">
              {serviciosFiltrados.length} resultados
            </div>
          </div>

          <div className="service-filters">
            {['Todos', 'Mecánicos', 'Lavaderos', 'Grúas', 'Montallantas'].map(
              (nombre) => (
                <button
                  key={nombre}
                  className={categoria === nombre ? 'filter-active' : ''}
                  onClick={() => setCategoria(nombre)}
                >
                  {nombre}
                </button>
              )
            )}
          </div>

          <div className="dashboard-search">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Escribe el nombre de una categoría..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />

            {busqueda && (
              <button onClick={() => setBusqueda('')}>
                Limpiar
              </button>
            )}
          </div>

          <div className="dashboard-service-grid">
            {serviciosFiltrados.map((servicio) => (
              <article className="dashboard-service-card" key={servicio.nombre}>
                <div className="service-photo">
                  <img src={servicio.imagen} alt={servicio.nombre} />
                  <span className="service-category-label">
                    {servicio.etiqueta}
                  </span>
                </div>

                <div className="service-card-content">
                  <div className="service-card-title">
                    <span>{servicio.icono}</span>
                    <h3>{servicio.nombre}</h3>
                  </div>

                  <p>{servicio.descripcion}</p>

                  <button
                    className="service-explore-button"
                    onClick={() => {
                      setCategoria(servicio.nombre);
                      setBusqueda('');
                    }}
                  >
                    Ver esta categoría <span>→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>

          {serviciosFiltrados.length === 0 && (
            <div className="dashboard-empty">
              <span>🔎</span>
              <h3>No encontramos resultados</h3>
              <p>Prueba con otro término o selecciona otra categoría.</p>
              <button
                onClick={() => {
                  setBusqueda('');
                  setCategoria('Todos');
                }}
              >
                Mostrar todas las categorías
              </button>
            </div>
          )}
        </section>

        {/* MANTENIMIENTO */}
        <section className="maintenance-section" id="mantenimiento">
          <div className="section-heading">
            <div>
              <span>ORGANIZA TUS REVISIONES</span>
              <h2>Mi lista de cuidados</h2>
              <p>Marca las tareas que ya hayas realizado en tu vehículo.</p>
            </div>

            <div className="maintenance-progress">
              {progreso}% completado
            </div>
          </div>

          <div className="maintenance-layout">
            <div className="maintenance-list">
              {tareas.map((tarea) => (
                <label
                  className={`maintenance-task ${tarea.hecha ? 'task-done' : ''}`}
                  key={tarea.id}
                >
                  <input
                    type="checkbox"
                    checked={tarea.hecha}
                    onChange={() => cambiarTarea(tarea.id)}
                  />

                  <span className="custom-check">✓</span>
                  <span>{tarea.texto}</span>
                </label>
              ))}
            </div>

            <div className="progress-card">
              <div className="progress-circle">
                <div>
                  <strong>{progreso}%</strong>
                  <span>Completado</span>
                </div>
              </div>

              <h3>¡Mantén tu vehículo al día!</h3>
              <p>
                Lleva un control de los cuidados que has realizado.
              </p>

              <span className="progress-counter">
                {tareasCompletadas} de {tareas.length} tareas marcadas
              </span>
            </div>
          </div>
        </section>

        {/* CONSEJOS */}
        <section className="dashboard-tips" id="consejos">
          <div className="section-heading">
            <div>
              <span>INFORMACIÓN ÚTIL</span>
              <h2>Consejos para cuidar tu vehículo</h2>
              <p>Ten presentes estos cuidados básicos en tu día a día.</p>
            </div>
          </div>

          <div className="dashboard-tips-grid">
            {consejos.map((consejo) => (
              <article className="dashboard-tip-card" key={consejo.titulo}>
                <div className="tip-icon">{consejo.icono}</div>
                <h3>{consejo.titulo}</h3>
                <p>{consejo.descripcion}</p>
              </article>
            ))}
          </div>
        </section>

        {/* PERFIL */}
        <section className="profile-banner">
          <div className="profile-banner-icon">👤</div>

          <div>
            <span>PERSONALIZA TU EXPERIENCIA</span>
            <h2>¿Quieres revisar tu información?</h2>
            <p>Accede a tu perfil para consultar tus datos personales.</p>
          </div>

          <Link to="/perfil">
            Ir a mi perfil →
          </Link>
        </section>

        {/* FOOTER */}
        <footer className="dashboard-footer">
          <img src={logo} alt="VELOEXPRESS" />
          <p>Tu camino, nuestra prioridad.</p>
          <span>© 2026 VELOEXPRESS - Todos los derechos reservados.</span>
        </footer>

      </main>
    </div>
  );
}
