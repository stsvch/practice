// src/pages/ProductDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const { id } = useParams();
  return (
    <main>
      <h1>Товар #{id}</h1>
      {/* детальная информация по продукту */}
    </main>
  );
}
