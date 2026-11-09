import axios from 'axios';

// Conexión con el backend (puerto 3000)
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

// Enviar el token automáticamente en las peticiones
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Manejar errores de autenticación
api.interceptors.response.use(
  (res) => res,

  (err) => {
    const esAuth = err.config?.url?.includes('/auth/');

    if (err.response?.status === 401 && !esAuth) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }

    return Promise.reject(err);
  }
);

export default api;
