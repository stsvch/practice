import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getCaseStudies } from '../../api/caseStudiesApi';
import RequireAdmin from '../RequireAdmin'; // ← добавляем

const CaseList = () => {
  const [cases, setCases] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const loadCases = async () => {
      try {
        const data = await getCaseStudies();
        setCases(data.items || []);
      } catch (err) {
        console.error('Ошибка при загрузке кейсов:', err);
      }
    };
    loadCases();
  }, [location]);

  return (
    <section className='mb-12'>
      <div className="flex justify-between items-center mb-4">
        <h2 className='text-2xl font-semibold'>Реализованные объекты</h2>
        
        {/* Показываем кнопку только для Admin */}
        <RequireAdmin>
          <Link
            to="/cases/new"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            + Добавить кейс
          </Link>
        </RequireAdmin>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {cases.map(item => (
          <div key={item.id} className='border rounded p-4'>
            <img
              src={item.img || '/placeholder-case.jpg'}
              alt={item.name}
              className='mb-2 h-40 object-cover rounded'
            />
            <h3 className='text-xl font-medium'>{item.name}</h3>
            <p className='text-sm'>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseList;
