// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { login } from '../api/authApi';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [creds, setCreds] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { setUserFromToken } = useAuth();

  // Куда перенаправлять после логина
  const from = location.state?.from?.pathname || '/';

  const handleChange = e =>
    setCreds(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await login(creds);
      const { accessToken, refreshToken } = res.data;
      // Сохраняем токены
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      // Обновляем контекст
      setUserFromToken(accessToken);
      // Переходим туда, откуда пришли
      navigate(from, { replace: true });
    } catch {
      setError('Неверные логин или пароль');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20">
      <h1 className="text-2xl mb-4">Вход в админ-панель</h1>
      {error && <p className="text-red-600 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="username"
          placeholder="Логин"
          value={creds.username}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          name="password"
          type="password"
          placeholder="Пароль"
          value={creds.password}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Войти
        </button>
      </form>
    </div>
  );
};

export default Login;
