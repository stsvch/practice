// src/components/Home/Hero.jsx
import React from 'react';
import Container from '../Layout/Container';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    // делаем full-bleed: сдвигаем влево на 50%, растягиваем на ширину экрана и центрируем обратно
    <section
      id="hero"
      className="
        relative
        left-1/2 right-1/2
        w-screen
        -ml-[50vw] mr-[50vw]
        flex items-center justify-center text-center
        bg-gradient-to-r from-primary to-accent
        text-white
        py-32 overflow-hidden
      "
    >
      {/* Фон */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />

      {/* Контент по центру */}
      <Container className="relative flex flex-col items-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Инженерные решения для рекордных результатов
        </h1>
        <p className="text-lg md:text-xl max-w-xl">
          Создаём узкоспециализированные тренажёры, основанные на последних исследованиях биомеханики.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => scrollTo('process')}
            className="btn btn-primary"
          >
            Как мы работаем
          </button>
          <button
            onClick={() => scrollTo('features')}
            className="btn btn-outline"
          >
            Наши преимущества
          </button>
        </div>
      </Container>
    </section>
  );
}
