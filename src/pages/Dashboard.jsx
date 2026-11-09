
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import logo from '../assets/Logo.png';
import mecanicos from '../assets/Mecanicos.JPG';
import lavaderos from '../assets/Lavaderos.JPG';
import gruas from '../assets/Gruas.JPG';
import montallantas from '../assets/Montallantas.JPG';

import './Dashboard.css';

const servicios = [
  {
    nombre: 'Mecánicos',
    descripcion: 'Encuentra profesionales para reparar tu vehículo.',
    imagen: mecanicos
  },
  {
    nombre: 'Lavaderos',
    descripcion: 'Encuentra lugares para lavar tu automóvil.',
    imagen: lavaderos
  },
  {
    nombre: 'Grúas',
    descripcion: 'Asistencia y transporte para tu vehículo.',
    imagen: gruas
  },
  {
    nombre: 'Montallantas',
    descripcion: 'Soluciones para llantas y neumáticos.',
    imagen: montallantas
  }
];

export default function Dashboard() {
  const { user, logout } = useAuth();
  const [busqueda, setBusqueda] = useState('');

  const serviciosFiltrados = servicios.filter((servicio) =>
    servicio.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <img src={logo} alt="VELOEXPRESS" className="dashboard-logo" />

        <nav className="dashboard-nav">
          <Link to="/dashboard">Inicio</Link>
          <Link to="/perfil">Mi perfil</Link>
          <button onClick={logout}>Cerrar sesión</button>
        </nav>
      </header>

      <main className="dashboard-main">
        <section className="dashboard-welcome">
          <span className="dashboard-tag">TU VEHÍCULO, EN BUENAS MANOS</span>
          <h1>Bienvenido a VELOEXPRESS</h1>
          <p>
            {user?.correo
              ? `Hola, ${user.correo}. ¿Qué servicio necesitas hoy?`
              : 'Encuentra los mejores servicios para tu vehículo.'}
          </p>

          <input
            type="text"
            placeholder="Buscar mecánicos, lavaderos, grúas..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="dashboard-search"
          />
        </section>

        <section className="dashboard-services">
          <div className="dashboard-section-title">
            <div>
              <h2>Explora nuestros servicios</h2>
              <p>Todo lo que necesitas para tu vehículo en un solo lugar.</p>
            </div>
          </div>

          <div className="service-grid">
            {serviciosFiltrados.map((servicio) => (
              <article className="service-card" key={servicio.nombre}>
                <img src={servicio.imagen} alt={servicio.nombre} />
                <div className="service-info">
                  <h3>{servicio.nombre}</h3>
                  <p>{servicio.descripcion}</p>
                </div>
              </article>
            ))}
          </div>

          {serviciosFiltrados.length === 0 && (
            <p className="no-services">
              No encontramos servicios con ese nombre.
            </p>
          )}
        </section>
      </main>

      <footer className="dashboard-footer">
        © 2026 VELOEXPRESS - Todos los derechos reservados.
      </footer>
    </div>
  );
}
