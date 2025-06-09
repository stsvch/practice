// src/pages/Knowledge.jsx
import React from 'react';
import styles from './Knowledge.module.css';

export default function Knowledge() {
  return (
    <main className={styles.main}>
      {/* Научная часть */}
      <section className={styles.section}>
        <h1>Исследования и разработки</h1>
        <p>Публикации, лабораторные тесты и исследования мышечной изолировки.</p>
        <ul className={styles.list}>
          <li><a href="/download/research1.pdf">Лабораторный отчёт №1</a></li>
          <li><a href="/download/research2.pdf">Статья «Оптимизация движений»</a></li>
        </ul>
      </section>

      {/* Новости и события */}
      <section className={styles.section}>
        <h2>Новости и статьи</h2>
        <article className={styles.article}>
          <h3>Анонс выставки Fitness Expo 2025</h3>
          <time dateTime="2025-03-10">10 марта 2025</time>
          <p>Примем участие в международной выставке в Москве.</p>
          <a href="/news/expo-2025">Читать подробнее →</a>
        </article>
        {/* …ещё статей */}
      </section>

      {/* Анонсы семинаров */}
      <section className={styles.section}>
        <h2>Семинары и вебинары</h2>
        <ul className={styles.events}>
          <li>
            <strong>Вебинар «Новые методики изолированной тренировки»</strong>
            <p>Дата: 20 июня 2025</p>
            <a href="/events/webinar-iso">Регистрация</a>
          </li>
          {/* …ещё событий */}
        </ul>
      </section>
    </main>
  );
}
