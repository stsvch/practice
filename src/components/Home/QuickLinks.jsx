// src/components/Home/QuickLinks.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const QuickLinks = () => (
  <section className='mb-12'>
    <h2 className='text-2xl font-semibold mb-4'>Быстрые ссылки</h2>
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
      <Link to='/products' className='block p-6 border rounded hover:shadow'>
        Продукция
      </Link>
      <Link to='/knowledge-events' className='block p-6 border rounded hover:shadow'>
        Знания и события
      </Link>
      <Link to='/service-support' className='block p-6 border rounded hover:shadow'>
        Сервис и поддержка
      </Link>
    </div>
  </section>
);

export default QuickLinks;