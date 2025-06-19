// src/components/Header/Header.jsx
import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import { ThemeContext } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';
import { logout as apiLogout } from '../../api/authApi';

const navItems = [
  ['/', 'Главная'],
  ['/about', 'О нас'],
  ['/products', 'Разработки'],
  ['/cases', 'Кейсы и галерея'],
  ['/knowledge', 'Знания и события'],
  ['/contact', 'Контакты'],
];

export default function Header() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const refresh = localStorage.getItem('refreshToken');
    try {
      if (refresh) {
        await apiLogout(refresh);
      }
    } catch (err) {
      console.error('Ошибка при выходе:', err);
    }
    logout();
    navigate('/login', { replace: true });
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NavLink to="/" className={styles.logo}>
          <img src="/logo.png" alt="iNSportTech" className={styles.logoImage} />
        </NavLink>

        <nav className={styles.nav}>
          {navItems.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} ${styles.active}`
                  : styles.navLink
              }
            >
              {label}
            </NavLink>
          ))}
          {user?.roles?.includes('Admin') && (
            <button
              onClick={handleLogout}
              className={styles.navLink}
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              Выйти
            </button>
          )}
        </nav>

        <button onClick={toggleTheme} className={styles.toggleBtn}>
          {darkMode ? 'Светлая тема' : 'Тёмная тема'}
        </button>
      </div>
    </header>
  );
}
