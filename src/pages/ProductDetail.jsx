// src/pages/ProductDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const product = {
    id,
    name: `Продукт ${id}`,
    img: '/placeholder-product.jpg',
    specs: { weight: '100kg', dimensions: '200x100x150cm' },
    videoId: 'VIDEO_ID',
    checklist: ['Пункт 1', 'Пункт 2', 'Пункт 3'],
  };

  return (
    <main className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-6'>{product.name}</h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        <img src={product.img} alt={product.name} className='rounded w-full h-auto' />
        <div>
          <h2 className='text-2xl font-semibold mb-4'>Спецификации</h2>
          <ul className='list-disc list-inside mb-4'>
            {Object.entries(product.specs).map(([key, val]) => (
              <li key={key}><strong>{key}:</strong> {val}</li>
            ))}
          </ul>
          {product.videoId && (
            <div className='mb-4'>
              <h3 className='text-xl font-medium mb-2'>Видеообзор</h3>
              <div className='aspect-w-16 aspect-h-9'>
                <iframe src={`https://www.youtube.com/embed/${product.videoId}`} title='Video review' allowFullScreen className='w-full h-full rounded' />
              </div>
            </div>
          )}
          <div>
            <h3 className='text-xl font-medium mb-2'>Чек-лист</h3>
            <ul className='list-disc list-inside'>
              {product.checklist.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;