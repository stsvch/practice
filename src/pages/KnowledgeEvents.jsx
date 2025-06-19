// src/pages/KnowledgeEvents.jsx
import React from 'react';
import ResearchList from '../components/Knowledge/ResearchList';
import NewsList from '../components/Knowledge/NewsList';
import EventsList from '../components/Knowledge/EventsList';

const KnowledgeEvents = () => (
<main className="container mx-auto px-4 py-8 mt-28 space-y-24">
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Исследования и разработки</h1>
      <ResearchList />
    </section>
    <section className="space-y-4">
      {/* Кнопка добавления и список */}
      <NewsList />
    </section>
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Анонсы выставок и семинаров</h1>
      <EventsList />
    </section>
  </main>
);

export default KnowledgeEvents;
