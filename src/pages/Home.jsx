// src/pages/Home.jsx
import React from 'react';
import OverviewSection from '../components/Home/OverviewSection';
import QuickLinks from '../components/Home/QuickLinks';

const Home = () => {
  return (
    <main className='container mx-auto px-4 py-8'>
      <OverviewSection />
      <QuickLinks />
    </main>
  );
};

export default Home;