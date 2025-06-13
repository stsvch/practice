// src/pages/About.jsx
import React from 'react';
import HeroAbout from '../components/About/HeroAbout';
import MissionValues from '../components/About/MissionValues';
import HistoryTimeline from '../components/About/HistoryTimeline';
import TeamSection from '../components/About/TeamSection';
import ClientsSection from '../components/About/ClientsSection';
import ProcessTeaser from '../components/About/ProcessTeaser';
import CTAJoin from '../components/About/CTAJoin';
import Footer from '../components/Layout/Footer';

export default function AboutPage() {
  return (
    <main>
      <HeroAbout />
      <MissionValues />
      <HistoryTimeline />
      <TeamSection />
      <ClientsSection />
      <ProcessTeaser />
      <CTAJoin />
      
    </main>
  );
}
