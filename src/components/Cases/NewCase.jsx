import React, { useState } from 'react';
import { createCaseStudy, uploadCaseStudyPhoto } from '../../api/caseStudiesApi';
import { useNavigate } from 'react-router-dom';

const NewCase = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: '', description: '' });
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleChange = e => {
    const { name, value, files } = e.target;
    if (files) setFile(files[0]);
    else setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      // 1) Создаем кейс
      const newId = await createCaseStudy({
        title: form.title,
        description: form.description
      });

      // 2) Если есть файл — загружаем
      if (file) {
        await uploadCaseStudyPhoto(newId, file);
      }

      // 3) Идем назад к списку
      navigate('/cases', { replace: true });
    } catch (err) {
      console.error(err.response?.data || err);
      setError('Ошибка при добавлении кейса');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-20 p-6">
      <h1 className="text-2xl font-bold mb-4">Добавить кейс</h1>
      {error && <div className="mb-4 p-2 bg-red-100 text-red-700">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Название</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Описание</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
            rows={4}
          />
        </div>
        <div>
          <label className="block mb-1">Фото (опционально)</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Добавить кейс
        </button>
      </form>
    </div>
  );
};

export default NewCase;
