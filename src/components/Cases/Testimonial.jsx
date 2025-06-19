// src/components/Cases/Testimonial.jsx
import React from 'react';

const testimonials = [
  { id: 1, author: 'Клиент А', text: 'Отличная работа! Всё выполнено в срок и качественно.' },
  { id: 2, author: 'Компания B', text: 'Очень довольны сотрудничеством. Рекомендуем!' },
];

const Testimonial = () => (
  <section className='bg-gray-100 py-10 px-4 rounded-lg shadow-sm mt-12'>
    <h2 className='text-2xl font-semibold text-center mb-6'>Отзывы заказчиков</h2>
    <div className='grid gap-6 sm:grid-cols-2'>
      {testimonials.map(({ id, author, text }) => (
        <div
          key={id}
          className='bg-white rounded-lg shadow p-6 border-l-4 border-blue-500'
        >
          <p className='italic text-gray-700 mb-4'>“{text}”</p>
          <div className='text-right text-sm text-gray-500'>— {author}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonial;
