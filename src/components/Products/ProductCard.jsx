import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  // Берём первый путь из photoPaths
  const imgUrl = product.photoPaths?.[0] 
    ? `${process.env.REACT_APP_API_URL.replace('/api','')}${product.photoPaths[0]}` 
    : '/placeholder-product.jpg';

  return (
    <div className="border rounded p-4 flex flex-col">
      <img
        src={imgUrl}
        alt={product.title}
        className="mb-4 h-40 object-cover rounded"
      />
      <h3 className="text-xl font-medium mb-2">{product.title}</h3>
      <p className="text-sm mb-2">{product.description}</p>
      <Link
        to={`/products/${product.id}`}
        className="mt-auto text-blue-600 hover:underline"
      >
        Подробнее
      </Link>
    </div>
  );
};

export default ProductCard;
