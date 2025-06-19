// src/components/Products/ProductDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { fetchDevelopmentById } from '../../api/developmentsApi';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const data = await fetchDevelopmentById(id);
        setProduct(data);
      } catch (err) {
        console.error('Ошибка загрузки продукта:', err);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id]);

  if (notFound) return <Navigate to="/404" replace />;
  if (loading) return <p className="p-6">Загрузка...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      {product.photos?.map(photo => (
        <img
          key={photo.id}
          src={photo.path}
          alt={product.name}
          className="mb-4 w-full rounded"
        />
      ))}
      <p className="mb-4">{product.description}</p>
      {/* При необходимости отобразите другие поля из DTO */}
    </div>
  );
};

export default ProductDetail;
