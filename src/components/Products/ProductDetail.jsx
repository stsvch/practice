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
    let cancelled = false;
    const load = async () => {
      setLoading(true);
      try {
        const data = await fetchDevelopmentById(id);
        if (!cancelled) setProduct(data);
      } catch (err) {
        console.error('Ошибка загрузки продукта:', err);
        if (!cancelled) setNotFound(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    load();
    return () => { cancelled = true; };
  }, [id]);

  if (notFound) return <Navigate to="/404" replace />;
  if (loading)   return <p className="p-6">Загрузка...</p>;

  // Разбиваем поля продукта на «основные» и «остальные»
  const {
    id: prodId,
    name,
    description,
    photos,
    ...otherFields
  } = product;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">{name}</h1>
      
      {/* Фото */}
      {photos?.length > 0 ? (
        photos.map(photo => (
          <img
            key={photo.id}
            src={photo.path}
            alt={name}
            className="w-full rounded mb-4"
          />
        ))
      ) : (
        <div className="w-full h-64 bg-gray-200 rounded flex items-center justify-center mb-4">
          Нет изображений
        </div>
      )}

      {/* Данные */}
      <div className="space-y-2">
        <p><strong>ID:</strong> {prodId}</p>
        <p><strong>Описание:</strong> {description}</p>
        {/* Выводим все остальные поля из DTO автоматически */}
        {Object.entries(otherFields).map(([key, value]) => (
          <p key={key}>
            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{' '}
            {value === null || value === undefined
              ? '—'
              : Array.isArray(value)
                ? value.join(', ')
                : value.toString()}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
