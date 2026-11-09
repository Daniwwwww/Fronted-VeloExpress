import api from '../api/axios';

// REGISTRAR USUARIO
export const registrar = (datos) =>
  api.post('/auth/register', datos).then((r) => r.data);

// INICIAR SESIÓN
export const iniciarSesion = (correo, password) =>
  api.post('/auth/login', { correo, password }).then((r) => r.data);

// OBTENER PERFIL
export const obtenerPerfil = () =>
  api.get('/usuarios').then((r) => r.data);

// ACTUALIZAR PERFIL
export const actualizarPerfil = (id, datos) =>
  api.put(`/usuarios/${id}`, datos).then((r) => r.data);
