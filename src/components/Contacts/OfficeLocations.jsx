// src/components/Contacts/OfficeLocations.jsx
import React from 'react';

const OfficeLocations = () => (
  <section>
    <h2 className='text-2xl font-semibold mb-4'>Наши офисы</h2>
    <div className='space-y-4'>
      <div>
        <h3 className='font-medium'>Главный офис</h3>
        <p>Адрес: Улица Пример, 1, Город</p>
      </div>
    </div>
    <div className='mt-6'>
      <h3 className='font-medium mb-2'>Карта</h3>
      <div className='aspect-w-16 aspect-h-9'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!...'
          title='Office locations'
          className='w-full h-full rounded'
          allowFullScreen
          loading='lazy'
        ></iframe>
      </div>
    </div> {/* Эта строка закрывает div с классом 'mt-6' */}
  </section> // ← добавлено закрытие тега section
);

export default OfficeLocations;
