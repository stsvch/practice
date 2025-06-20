import React, { useState } from 'react';
import { createNews, uploadNewsPhoto } from '../../api/newApi';
import { useNavigate } from 'react-router-dom';

const NewNews = () => {
  const navigate = useNavigate();
  // form содержит title и description
  const [form, setForm] = useState({ title: '', description: '' });
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState('');

  const handleChange = e => {
    const { name, value, files } = e.target;
    if (files && files[0]) {
      setPhoto(files[0]);
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      // 1️⃣ Создаём новость
      const newId = await createNews({
        title: form.title,
        description: form.description
      });

      // 2️⃣ Если выбрана картинка — заливаем её
      if (photo) {
        await uploadNewsPhoto(newId, photo);
      }

      // 3️⃣ Успешно — переходим на список новостей
      navigate('/knowledge', { replace: true });
    } catch (err) {
      console.error('Ошибка при создании новости:', err.response?.data || err);
      setError('Ошибка при создании новости');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-24 p-6">
      <h1 className="text-2xl font-bold mb-4">Добавить новую новость</h1>
      {error && (
        <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Заголовок</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Введите заголовок"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Описание</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Краткое описание"
            rows={5}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Фото (опционально)</label>
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleChange}
            className="w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Добавить новость
        </button>
      </form>
    </div>
  );
};

export default NewNews;
