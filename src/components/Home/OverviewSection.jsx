import React from 'react';

const OverviewSection = () => (
  <section className='mb-12'>
    <h1 className='text-3xl font-bold mb-4'>О компании</h1>
    <p className='mb-4'>
      Краткий обзор компании. Здесь можно описать миссию, историю в пару предложений и ключевые преимущества (УТП).
    </p>
    <ul className='list-disc list-inside'>
      <li>УТП 1: Высокое качество оборудования</li>
      <li>УТП 2: Инновационные решения</li>
      <li>УТП 3: Широкая сеть сервисного обслуживания</li>
    </ul>
  </section>
);

export default OverviewSection;