// src/components/News/NewsList.jsx
import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';
import { Link } from 'react-router-dom';
import { getNews } from '../../api/newApi';      // убедитесь, что путь верный
import { useAuth } from '../../context/AuthContext';

const NewsList = () => {
  const { user } = useAuth();
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const pageSize = 6; // по 6 на страницу
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const fetchNewsData = async () => {
      setLoading(true);
      try {
        const data = await getNews(page, pageSize);
        setNewsItems(data.items || []);
        setTotalCount(data.totalCount || 0);
      } catch (err) {
        console.error('Ошибка загрузки новостей:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsData();
  }, [page, pageSize]);

  const totalPages = Math.ceil(totalCount / pageSize);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Новости и статьи</h2>
        {user?.roles?.includes('Admin') && (
          <Link
            to="/news/new"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            + Добавить новость
          </Link>
        )}
      </div>

      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.map(n => (
              <NewsCard key={n.id} {...n} />
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

export default NewsList;
