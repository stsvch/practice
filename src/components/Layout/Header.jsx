import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { ThemeContext } from '../../context/ThemeContext';

const navItems = [
  ['/', 'Главная'],
  ['/about', 'О нас'],
  ['/products', 'Разработки'],
  ['/cases', 'Кейсы и галерея'],
  ['/knowledge', 'Знания и события'],
  ['/support', 'Сервис и поддержка'],
  ['/contact', 'Контакты'],
];

export default function Header() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

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
        </nav>

        <button onClick={toggleTheme} className={styles.toggleBtn}>
          {darkMode ? 'Светлая тема' : 'Тёмная тема'}
        </button>
      </div>
    </header>
  );
}
