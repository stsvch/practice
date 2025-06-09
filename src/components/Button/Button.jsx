import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

/**
 * Button компонент для навигации и действий пользователя.
 * @param {string} to - путь для перехода.
 * @param {'primary'|'secondary'|'tertiary'} variant - стиль кнопки.
 * @param {React.ReactNode} children - содержимое кнопки.
 */
export default function Button({ to, variant = 'primary', children, ...props }) {
  const className = `${styles.button} ${styles[variant]}`;
  return (
    <Link to={to} className={className} {...props}>
      {children}
    </Link>
  );
}