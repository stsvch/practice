// src/services/api.js
import axios from 'axios';

// 1. Создаем экземпляр axios с базовыми настройками
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'https://api.fitness-pioneer.com',
  timeout: 10000, // 10 секунд
  headers: {
    'Content-Type': 'application/json',
  },
});

// 2. Интерцептор запроса — например, добавляем Bearer-токен, если он есть
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

// 3. Интерцептор ответа — централизованная обработка ошибок
api.interceptors.response.use(
  response => response,
  error => {
    // Можно отлавливать 401 и редиректить на логин
    if (error.response?.status === 401) {
      // например: window.location.href = '/login';
    }
    // Здесь же можно логировать ошибку в стороннюю систему
    return Promise.reject(error);
  }
);

export default api;

// 4. Формируем конкретные endpoint-функции
export const productsAPI = {
  fetchAll: () => api.get('/products'),
  fetchById: id => api.get(`/products/${id}`),
};

export const newsAPI = {
  fetchLatest: () => api.get('/news?limit=5'),
  fetchById: id => api.get(`/news/${id}`),
};

// И так далее для других ресурсов…
