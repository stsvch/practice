import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use(cfg => {
  const token = localStorage.getItem('authToken');
  if (token) cfg.headers.Authorization = `Bearer ${token}`;
  return cfg;
});

api.interceptors.response.use(
  res => res,
  err => {
    if (err.response?.status === 401) {
      // например, перенаправление на /login
    }
    return Promise.reject(err);
  }
);

export default api;

export const productsAPI = {
  fetchAll: () => api.get('/products'),
  fetchById: id => api.get(`/products/${id}`),
};
export const newsAPI = {
  fetchLatest: () => api.get('/news?limit=5'),
  fetchById: id => api.get(`/news/${id}`),
};
