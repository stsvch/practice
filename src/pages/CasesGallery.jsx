// src/pages/CasesGallery.jsx
import React from 'react';
import CaseList from '../components/Cases/CaseList';
import Testimonial from '../components/Cases/Testimonial';

const CasesGallery = () => (
  <main className='container mx-auto px-4 py-8'>
    <h1 className='text-3xl font-bold mb-6'>Кейсы и галерея</h1>
    <CaseList />
    <Testimonial />
  </main>
);

export default CasesGallery;