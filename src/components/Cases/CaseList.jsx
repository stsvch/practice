// src/components/Cases/CaseList.jsx
import React from 'react';

const casesExample = [
  { id: 1, name: 'Фитнес-клуб X', img: '/placeholder-case.jpg', description: 'Описание проекта' },
];

const CaseList = () => (
  <section className='mb-12'>
    <h2 className='text-2xl font-semibold mb-4'>Реализованные объекты</h2>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      {casesExample.map(item => (
        <div key={item.id} className='border rounded p-4'>
          <img src={item.img} alt={item.name} className='mb-2 h-40 object-cover rounded' />
          <h3 className='text-xl font-medium'>{item.name}</h3>
          <p className='text-sm'>{item.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default CaseList;