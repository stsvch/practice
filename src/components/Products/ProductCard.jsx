import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <div className='border rounded p-4 flex flex-col'>
    <img src={product.img || '/placeholder-product.jpg'} alt={product.name} className='mb-4 h-40 object-cover rounded' />
    <h3 className='text-xl font-medium mb-2'>{product.name}</h3>
    <ul className='text-sm mb-4'>
      {Object.entries(product.specs).map(([key, val]) => (
        <li key={key}><strong>{key}:</strong> {val}</li>
      ))}
    </ul>
    {product.videoId && (
      <Link to={`/products/detail/${product.id}`} className='mt-auto text-blue-600 hover:underline'>
        Подробнее
      </Link>
    )}
  </div>
);

export default ProductCard;