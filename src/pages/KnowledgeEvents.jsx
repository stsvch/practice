// src/pages/KnowledgeEvents.jsx
import React from 'react';
import ResearchList from '../components/Knowledge/ResearchList';
import NewsList from '../components/Knowledge/NewsList';
import EventsList from '../components/Knowledge/EventsList';

const KnowledgeEvents = () => (
  <main className='container mx-auto px-4 py-8 space-y-12'>
    <section>
      <h1 className='text-3xl font-bold mb-4'>Исследования и разработки</h1>
      <ResearchList />
    </section>
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Новости и статьи</h1>
      <NewsList />
    </section>
    <section>
      <h1 className='text-3xl font-bold mb-4'>Анонсы выставок и семинаров</h1>
      <EventsList />
    </section>
  </main>
);

export default KnowledgeEvents;
