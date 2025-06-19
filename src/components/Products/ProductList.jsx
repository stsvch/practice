import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchDevelopments } from '../../api/developmentsApi';
import { useAuth } from '../../context/AuthContext';
import ProductCard from './ProductCard';

const ProductList = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      setLoading(true);
      try {
        const { items, totalCount } = await fetchDevelopments(page, pageSize);
        if (!cancelled) {
          setProducts(items);
          setTotalCount(totalCount);
        }
      } catch (err) {
        console.error('Ошибка загрузки продуктов:', err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    load();
    return () => { cancelled = true; };
  }, [page]);

  const totalPages = Math.ceil(totalCount / pageSize);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Каталог продуктов</h1>
        {user?.roles?.includes('Admin') && (
          <Link
            to="/products/new"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            + Добавить продукт
          </Link>
        )}
      </div>

      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

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
