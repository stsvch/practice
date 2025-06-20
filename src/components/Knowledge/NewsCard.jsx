// src/components/Knowledge/NewsCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ id, title, description, photoPaths }) => {
  const imgSrc = photoPaths?.[0]
    ? `${process.env.REACT_APP_API_URL.replace('/api','')}${photoPaths[0]}`
    : '/placeholder-news.jpg';

  return (
    <div className="border rounded p-4 flex flex-col">
      <img
        src={imgSrc}
        alt={title}
        className="mb-4 h-40 object-cover rounded"
      />
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-sm mb-2 line-clamp-3">{description}</p>
      <Link to={`/news/${id}`} className="mt-auto text-blue-600 hover:underline">
        Читать далее →
      </Link>
    </div>
  );
};

export default NewsCard;
