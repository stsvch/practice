import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Силовые тренажёры', path: 'strength' },
  { name: 'Кардио-оборудование', path: 'cardio' },
  { name: 'Многофункциональные комплексы', path: 'multi' },
  { name: 'Портативные решения', path: 'portable' },
];

const CategoryList = () => (
  <div className='flex flex-col space-y-4'>
    {categories.map(cat => (
      <Link
        to={`/products/${cat.path}`}
        key={cat.path}
        className='p-4 border border-gray-300 rounded hover:shadow transition'
      >
        {cat.name}
      </Link>
    ))}
  </div>
);

export default CategoryList;
