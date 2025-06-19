// src/context/AuthContext.js
import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';
import { jwtDecode } from 'jwt-decode';
import { refreshToken as apiRefreshToken } from '../api/authApi';

const AuthContext = createContext({
  user: null,
  setUserFromToken: () => {},
  doRefresh: async () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Распаковать токен и записать user
  const setUserFromToken = useCallback((token) => {
    try {
      const payload = jwtDecode(token);
      setUser({
        username: payload.sub,
        roles: payload.roles || [],
        exp: payload.exp,
      });
    } catch {
      setUser(null);
    }
  }, []);

  // При монтировании читаем токен из localStorage
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      setUserFromToken(token);
    }
  }, [setUserFromToken]);

  // Обновить токен (по refreshToken в localStorage)
  const doRefresh = useCallback(async () => {
    const refresh = localStorage.getItem('refreshToken');
    if (!refresh) return;
    try {
      const res = await apiRefreshToken(refresh);
      const { accessToken, refreshToken } = res.data;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      setUserFromToken(accessToken);
    } catch {
      // если не удалось обновить — вылогаутим
      logout();
    }
  }, [setUserFromToken]);

  // Очистить всё и отправить на логин
  const logout = useCallback(() => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setUser(null);
    // можно добавить навигацию на /login, если нужен редирект
  }, []);

  // Опционально: раз в N минут проверять просрочку и обновлять
  useEffect(() => {
    if (!user?.exp) return;
    const expiresAt = user.exp * 1000;
    const now = Date.now();
    const msUntilExp = expiresAt - now;
    // обновим за 1 минуту до истечения
    const timeout = Math.max(msUntilExp - 60_000, 0);
    const handle = setTimeout(doRefresh, timeout);
    return () => clearTimeout(handle);
  }, [user, doRefresh]);

  return (
    <AuthContext.Provider value={{ user, setUserFromToken, doRefresh, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
