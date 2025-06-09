   import React from 'react';
import styles from './Layout.module.css';
import { Link } from 'react-router-dom'; // или next/link для Next.js

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <img src="/assets/logos/brand-logo.svg" alt="Fitness Pioneer" />
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/products">Продукция</Link></li>
            <li><Link to="/about">О компании</Link></li>
            <li><Link to="/news">Новости</Link></li>
            <li><Link to="/contact">Контакты</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}