// src/components/Products/NewProduct.jsx
import React, { useState } from 'react';
import {
  createDevelopment,
  uploadDevelopmentPhoto
} from '../../api/developmentsApi';

const NewProduct = () => {
  const [formData, setFormData] = useState({ name: '', description: '' });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0] || null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('▶️ handleSubmit fired', formData, file);
    setLoading(true);
    setMessage('');
    try {
      // 1️⃣ Создаем запись без файла
      const newId = await createDevelopment(formData);

      // 2️⃣ Если выбрана картинка — закидываем ее
      if (file) {
        await uploadDevelopmentPhoto(newId, file);
      }

      setMessage('Товар успешно добавлен!');
      setFormData({ name: '', description: '' });
      setFile(null);
    } catch (err) {
      console.error('Ошибка при добавлении товара:', err.response?.data || err);
      setMessage('Ошибка при добавлении товара.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 pt-20">
      <h1 className="text-2xl font-bold mb-4">Добавить новый товар</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Название"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Описание"
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full border p-2 rounded"
          accept="image/*"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          disabled={loading}
        >
          {loading ? 'Добавление...' : 'Добавить'}
        </button>
      </form>
      {message && (
        <p className="mt-4 text-center">{message}</p>
      )}
    </div>
  );
};

export default NewProduct;
