import React, { useEffect, useState } from 'react';
import { getCaseStudies } from '../../api/caseStudiesApi';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const CaseCard = ({ id, title, description, photoPaths }) => {
  const imgUrl = photoPaths?.[0]
    ? `${process.env.REACT_APP_API_URL.replace('/api','')}${photoPaths[0]}`
    : '/placeholder-case.jpg';

  return (
    <div className="border rounded p-4 flex flex-col">
      <img src={imgUrl} className="mb-4 h-40 object-cover rounded" alt={title} />
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-sm mb-2 line-clamp-3">{description}</p>
      <Link to={`/cases/${id}`} className="mt-auto text-blue-600 hover:underline">
        Подробнее
      </Link>
    </div>
  );
};

const CaseList = () => {
  const { user } = useAuth();
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page]    = useState(1);
  const [pageSize]= useState(10);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const { items } = await getCaseStudies(page, pageSize);
        setCases(items);
      } catch (err) {
        console.error('Ошибка загрузки кейсов:', err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [page, pageSize]);

  return (
    <section className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Реализованные объекты</h2>
        {user?.roles?.includes('Admin') && (
          <Link
            to="/cases/new"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            + Добавить кейс
          </Link>
        )}
      </div>

      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map(c => (
            <CaseCard key={c.id} {...c} />
          ))}
        </div>
      )}
    </section>
  );
};

export default CaseList;
