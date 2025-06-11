import React from 'react';
import HistoryMission from '../components/About/HistoryMission';
import Facilities from '../components/About/Facilities';
import Certificates from '../components/About/Certificates';

const About = () => (
  <main className='container mx-auto px-4 py-8'>
    <HistoryMission />
    <Facilities />
    <Certificates />
  </main>
);

export default About;