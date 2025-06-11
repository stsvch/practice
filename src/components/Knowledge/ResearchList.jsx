import React from 'react';

const researchItems = [ { id: 1, title: 'Исследование A', link: '#' } ];

const ResearchList = () => (
  <ul className='list-disc list-inside space-y-2'>
    {researchItems.map(item => (
      <li key={item.id}>
        <a href={item.link} className='text-blue-600 hover:underline'>{item.title}</a>
      </li>
    ))}
  </ul>
);

export default ResearchList;