// src/components/About/Facilities.jsx
import React from 'react';

const Facilities = () => (
  <section className='mb-12'>
    <h2 className='text-2xl font-semibold mb-4'>Производственные мощности</h2>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      <img src='/placeholder-facility1.jpg' alt='Производственный цех 1' className='rounded' />
      <img src='/placeholder-facility2.jpg' alt='Производственный цех 2' className='rounded' />
      <img src='/placeholder-facility3.jpg' alt='Производственный цех 3' className='rounded' />
    </div>
    <div className='mt-6'>
      <h3 className='text-xl font-medium mb-2'>Видеообзор производственных процессов</h3>
      <div className='aspect-w-16 aspect-h-9'>
        <iframe
          src='https://www.youtube.com/embed/VIDEO_ID'
          title='Video overview'
          allowFullScreen
          className='w-full h-full rounded'
        />
      </div>
    </div>
  </section>
);

export default Facilities;