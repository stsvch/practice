// src/pages/Cases.jsx
import React from 'react';
import styles from './Cases.module.css';

export default function Cases() {
  return (
    <main className={styles.main}>
      {/* Раздел: Реализованные объекты */}
      <section className={styles.section}>
        <h1>Реализованные объекты</h1>
        <div className={styles.gallery}>
          {/* Пример карточки */}
          <div className={styles.card}>
            <img src="/mock/images/club1.jpg" alt="Fit Club A" />
            <h3>Fitness Club A</h3>
            <p>Полное оснащение тренажерами из серии X.</p>
          </div>
          {/* …ещё карточки */}
        </div>
      </section>

      {/* Раздел: Отзывы заказчиков */}
      <section className={styles.section}>
        <h2>Отзывы заказчиков</h2>
        <div className={styles.testimonials}>
          <blockquote>
            «Тренажеры от Fitness Pioneer — это новый уровень качества и надёжности.»
            <cite>— Иван Иванов, директор «SportLife»</cite>
          </blockquote>
          {/* …ещё отзывы */}
        </div>
      </section>
    </main>
  );
}
