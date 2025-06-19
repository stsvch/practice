// src/pages/Products.jsx
import React from 'react';
import CategoryList from '../components/Products/ProductList';

const Products = () => (
  <main className='container mx-auto px-4 py-8'>
    <h1 className='text-3xl font-bold mb-6'>Продукция</h1>
    <CategoryList />
  </main>
);

export default Products;
