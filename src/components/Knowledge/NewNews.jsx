// src/components/Knowledge/NewNews.jsx
import React, { useState } from 'react';
import { createNews, uploadNewsPhoto } from '../../api/newsApi';
import { useNavigate } from 'react-router-dom';

const NewNews = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: '', summary: '' });
  const [photo, setPhoto] = useState(null);

  const handleChange = e => {
    const { name, value, files } = e.target;
    if (files) setPhoto(files[0]);
    else setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const newId = await createNews(form);
      if (photo) {
        await uploadNewsPhoto(newId, photo);
      }
      alert('Новость добавлена!');
      navigate('/knowledge'); // или другой нужный маршрут
    } catch (err) {
      console.error(err);
      alert('Ошибка при создании новости');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-28 mb-10 max-w-xl mx-auto space-y-4">
      <input name="title" placeholder="Заголовок" className="w-full border p-2 rounded" onChange={handleChange} />
      <textarea name="summary" placeholder="Краткое описание" className="w-full border p-2 rounded" onChange={handleChange} />
      <input type="file" name="photo" accept="image/*" className="w-full border p-2 rounded" onChange={handleChange} />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Добавить новость</button>
    </form>
  );
};

export default NewNews;
