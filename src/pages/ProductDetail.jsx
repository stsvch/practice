import React from 'react';
import { useParams } from 'react-router-dom';

const sampleProducts = {
  '1': {
    id: '1',
    name: 'Тренажёр A1',
    img: '/images/a1.jpg',
    specs: { 'Вес': '120 кг', 'Габариты': '200x100x150 см' },
    description: 'Многофункциональный тренажёр...',
    purpose: 'Для силовых тренировок дома',
    videoId: 'abc123',
  },
  // остальные...
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = sampleProducts[id];

  if (!product) return <div>Товар не найден</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img src={product.img} alt={product.name} className="mb-4 w-full rounded" />
      <p className="mb-2 text-lg"><strong>Описание:</strong> {product.description}</p>
      <p className="mb-2 text-lg"><strong>Цель:</strong> {product.purpose}</p>
      <ul className="mb-4">
        {Object.entries(product.specs).map(([key, val]) => (
          <li key={key}><strong>{key}:</strong> {val}</li>
        ))}
      </ul>
      {product.videoId && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Видеообзор</h2>
          <iframe
            className="w-full aspect-video rounded"
            src={`https://www.youtube.com/embed/${product.videoId}`}
            title={product.name}
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
