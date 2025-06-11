// src/components/Knowledge/NewsCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ title, summary, image, date, slug }) => (
  <div className="border border-red-500 bg-yellow-100 rounded-xl p-2 m-1">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4 flex flex-col h-full">
      <p className="text-sm text-gray-500 uppercase mb-1">Новости</p>
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="text-sm text-gray-700 mb-4 line-clamp-3">{summary}</p>
      <div className="mt-auto flex justify-between items-center">
        <Link to={`/news/${slug}`} className="text-blue-600 text-sm hover:underline">
          Читать далее →
        </Link>
        <span className="text-xs text-gray-400">{date}</span>
      </div>
    </div>
  </div>
);

export default NewsCard;
