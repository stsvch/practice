// src/components/Knowledge/EventsList.jsx
import React from 'react';

const events = [ { id: 1, title: 'Выставка X', date: '2025-07-15', link: '#' } ];

const EventsList = () => (
  <ul className='space-y-4'>
    {events.map(ev => (
      <li key={ev.id} className='border-b pb-2'>
        <a href={ev.link} className='text-lg font-medium text-blue-600 hover:underline'>{ev.title}</a>
        <p className='text-sm text-gray-600'>{ev.date}</p>
      </li>
    ))}
  </ul>
);

export default EventsList;
