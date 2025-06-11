// src/components/Knowledge/NewsList.jsx
import React from 'react';
import NewsCard from './NewsCard';

const newsData = [
  {
    title: 'Тестирование спортсменов...',
    summary: '4 мая 2022 года прошло тестирование...',
    image: 'https://via.placeholder.com/600x300?text=Новость+1',
    date: '17.07.2022',
    slug: 'belarus-biathlon-test',
  },
  {
    title: 'Исследование новых методов...',
    summary: 'Серия лабораторных испытаний...',
    image: 'https://via.placeholder.com/600x300?text=Новость+2',
    date: '10.06.2022',
    slug: 'strength-research',
  },
  {
    title: 'Участие в выставке...',
    summary: 'Компания представила новейшие тренажёры...',
    image: 'https://via.placeholder.com/600x300?text=Новость+3',
    date: '02.06.2022',
    slug: 'gymtech-expo',
  },
];

const NewsList = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {newsData.map((news) => (
      <NewsCard key={news.slug} {...news} />
    ))}
  </div>
);

export default NewsList;
