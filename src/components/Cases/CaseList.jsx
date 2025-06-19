// src/components/Cases/CaseList.jsx
import React, { useEffect, useState } from 'react';
import { getCaseStudies } from '../../api/caseStudiesApi';

const CaseList = () => {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const data = await getCaseStudies();
        setCases(data);
      } catch (err) {
        console.error('Ошибка при загрузке кейсов:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCases();
  }, []);

  if (loading) return <p>Загрузка кейсов...</p>;

  return (
    <section className='mb-12'>
      <h2 className='text-2xl font-semibold mb-4'>Реализованные объекты</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {cases.map(item => (
          <div key={item.id} className='border rounded p-4'>
            <img src={item.img || '/placeholder-case.jpg'} alt={item.name} className='mb-2 h-40 object-cover rounded' />
            <h3 className='text-xl font-medium'>{item.name}</h3>
            <p className='text-sm'>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseList;
