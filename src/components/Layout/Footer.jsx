// src/components/Layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';           // добавили
import styles from './Footer.module.css';          // новый модуль

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <Link to="/privacy">Политика конфиденциальности</Link>
          <Link to="/terms">Условия использования</Link>
        </div>
        <div className={styles.copy}>&copy; {currentYear} Fitness Pioneer. Все права защищены.</div>
      </div>
    </footer>
  );
}
