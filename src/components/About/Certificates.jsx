// src/components/About/Certificates.jsx
import React from 'react';

const Certificates = () => (
  <section className='mb-12'>
    <h2 className='text-2xl font-semibold mb-4'>Сертификаты и стандарты качества</h2>
    <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      <li className='border p-4 rounded'>
        <img src='/placeholder-cert1.jpg' alt='Сертификат ISO' className='mb-2 h-32 object-contain' />
        <p>ISO 9001:2015</p>
      </li>
      <li className='border p-4 rounded'>
        <img src='/placeholder-cert2.jpg' alt='Сертификат безопасности' className='mb-2 h-32 object-contain' />
        <p>CE Marking</p>
      </li>
    </ul>
  </section>
);

export default Certificates;