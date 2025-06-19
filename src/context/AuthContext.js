// src/context/AuthContext.js
import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback
} from 'react';
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

  // Распаковать JWT и записать user с ролями
  const setUserFromToken = useCallback((token) => {
    try {
      const payload = jwtDecode(token);
      console.log('🔑 JWT payload:', payload);

      // Собираем роли из разных возможных мест в токене
      let roles = [];
      if (Array.isArray(payload.roles)) {
        roles = payload.roles;
      } else if (typeof payload.role === 'string' || Array.isArray(payload.role)) {
        roles = Array.isArray(payload.role) ? payload.role : [payload.role];
      } else if (payload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']) {
        const claim = payload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
        roles = Array.isArray(claim) ? claim : [claim];
      }

      setUser({
        username: payload.sub || payload.unique_name || payload.name,
        roles,
        exp: payload.exp,
      });
    } catch (err) {
      console.error('Не удалось декодировать токен:', err);
      setUser(null);
    }
  }, []);

  // При монтировании читаем токен из localStorage и ставим user
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      setUserFromToken(token);
    }
  }, [setUserFromToken]);

  // Функция для обновления токена по refreshToken
  const doRefresh = useCallback(async () => {
    const refresh = localStorage.getItem('refreshToken');
    if (!refresh) return;
    try {
      const res = await apiRefreshToken(refresh);
      const { accessToken, refreshToken } = res.data;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      setUserFromToken(accessToken);
    } catch (err) {
      console.error('Не удалось обновить токен:', err);
      logout();
    }
  }, [setUserFromToken]);

  // Очистить токены и сбросить user
  const logout = useCallback(() => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setUser(null);
  }, []);

  // Автоматический refresh за минуту до истечения accessToken
  useEffect(() => {
    if (!user?.exp) return;
    const expiresAt = user.exp * 1000;
    const now = Date.now();
    const msUntilExp = expiresAt - now;
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
