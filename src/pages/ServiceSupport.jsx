// src/pages/ServiceSupport.jsx
import React from 'react';
import Warranty from '../components/Service/Warranty';
import SpareParts from '../components/Service/SpareParts';
import Documentation from '../components/Service/Documentation';

const ServiceSupport = () => (
  <main className='container mx-auto px-4 py-8 space-y-12'>
    <Warranty />
    <SpareParts />
    <Documentation />
  </main>
);

export default ServiceSupport;