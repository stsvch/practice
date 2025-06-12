// src/components/Home/IntroductionSection.jsx
import React from 'react';
import Container from '../Layout/Container';

export default function IntroductionSection() {
  return (
    <section className="bg-page pt-24 pb-16">
      <Container className="text-center space-y-6 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold dark:text-white leading-tight">
          <span className="block text-gray-800 dark:text-gray-200 mb-2">
            Первая компания на постсоветском пространстве
          </span>
          по моделированию и внедрению специализированных тренажёров
        </h2>

        <div className="w-16 h-1 bg-primary mx-auto mb-6" />

        <p className="text-lg text-gray-700 dark:text-gray-300">
          В то время как большинство производителей предлагает общие решения
          для общефизической подготовки, мы создаём узконаправленные системы,
          повышающие спортивный потенциал в конкретных соревновательных дисциплинах.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 italic">
          Наша миссия — интегрировать передовые инженерные разработки и
          новейшие исследования спортивной науки для максимальной эффективности
          тренировок и достижения рекордных результатов.
        </p>
      </Container>
    </section>
  );
}
