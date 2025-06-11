// src/components/Cases/Testimonial.jsx
import React from 'react';

const testimonials = [
  { id: 1, author: 'Клиент А', text: 'Отзыв клиента о сотрудничестве.' },
];

const Testimonial = () => (
  <section>
    <h2 className='text-2xl font-semibold mb-4'>Отзывы заказчиков</h2>
    <div className='space-y-6'>
      {testimonials.map(item => (
        <blockquote key={item.id} className='border-l-4 pl-4 italic'>
          <p>“{item.text}”</p>
          <footer className='mt-2 text-sm'>— {item.author}</footer>
        </blockquote>
      ))}
    </div>
  </section>
);

export default Testimonial;