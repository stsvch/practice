import React, { useEffect, useState } from 'react';
import { fetchDevelopments } from '../../api/developmentsApi'; // путь корректируй под свою структуру
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10); // можно сделать динамическим
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchDevelopments(page, pageSize);
        setProducts(data.items || []);
        setTotalCount(data.totalCount || 0);
      } catch (err) {
        console.error('Ошибка загрузки товаров:', err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [page, pageSize]);

  const totalPages = Math.ceil(totalCount / pageSize);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Каталог товаров</h1>
        <Link
          to="/products/new"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Добавить товар
        </Link>
      </div>

      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Пагинация */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`px-3 py-1 border rounded ${
                    page === i + 1
                      ? 'bg-blue-600 text-white'
                      : 'hover:bg-gray-200'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductList;
