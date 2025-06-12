// src/components/Home/QuickLinks.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../Layout/Container';

const sections = [
  {
    to: '/products',
    title: 'Продукция',
    desc: 'Ознакомьтесь с каталогом наших специализированных тренажёров и оборудования.',
  },
  {
    to: '/knowledge-events',
    title: 'Знания и события',
    desc: 'Читайте экспертные статьи и следите за предстоящими семинарами и вебинарами.',
  },
  {
    to: '/service-support',
    title: 'Сервис и поддержка',
    desc: 'Узнайте о гарантийном и постгарантийном обслуживании вашего оборудования.',
  },
];

export default function QuickLinks() {
  return (
    <section className="mb-20">
      <Container className="text-center space-y-8">
        <h2 className="text-3xl font-semibold">Исследуйте наши разделы</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {sections.map((sec) => (
            <Link
              key={sec.to}
              to={sec.to}
              className="
                block p-6 border border-gray-200 dark:border-gray-700 
                rounded-lg hover:shadow-lg transition
                hover:bg-gray-50 dark:hover:bg-gray-800
                h-full
              "
            >
              <h3 className="text-xl font-medium mb-2 dark:text-white">
                {sec.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {sec.desc}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
