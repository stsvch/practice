  import React from 'react';
import styles from './Layout.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.socials}>
          <a href="https://facebook.com" aria-label="Facebook">FB</a>
          <a href="https://instagram.com" aria-label="Instagram">IG</a>
          <a href="https://linkedin.com" aria-label="LinkedIn">IN</a>
        </div>
        <div className={styles.links}>
          <Link to="/privacy">Политика конфиденциальности</Link>
          <Link to="/terms">Условия использования</Link>
        </div>
        <div className={styles.copy}>&copy; {currentYear} Fitness Pioneer. Все права защищены.</div>
      </div>
    </footer>
  );
}