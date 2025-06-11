import React from 'react';
import { useParams } from 'react-router-dom';

const NewsDetail = () => {
  const { slug } = useParams();

  // Здесь будет подгрузка контента по slug (через API или локальные данные)
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Заголовок новости: {slug}</h1>
      <p className="mt-4">Здесь будет подробный текст новости.</p>
    </div>
  );
};

export default NewsDetail;
