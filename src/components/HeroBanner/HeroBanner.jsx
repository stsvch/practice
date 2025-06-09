import React from 'react';
import styles from './HeroBanner.module.css';
import Button from '../Button/Button';

/**
 * HeroBanner компонент отображает главный баннер с изображением, заголовком, подзаголовком и кнопками.
 * @param {string} backgroundImage - Путь к фоновому изображению баннера.
 * @param {string} title - Основной заголовок.
 * @param {string} subtitle - Подзаголовок или краткое описание.
 * @param {Array<{text: string, href: string}>} actions - Массив кнопок с текстом и ссылкой.
 */
export default function HeroBanner({
  backgroundImage = '/assets/images/hero-default.jpg',
  title = 'Добро пожаловать в Fitness Pioneer',
  subtitle = 'Первые тренажёры для изолированной проработки мышц в СНГ',
  actions = [
    { text: 'Каталог продукции', href: '/products' },
    { text: 'Узнать больше', href: '/about' },
  ],
}) {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.actions}>
          {actions.map((action, idx) => (
            <Button key={idx} to={action.href} variant={idx === 0 ? 'primary' : 'secondary'}>
              {action.text}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}