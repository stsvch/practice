// src/components/Cases/NewCase.jsx
import React, { useState } from 'react';
import { createCaseStudy } from '../../api/caseStudiesApi';

const NewCase = () => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    img: '',
  });

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await createCaseStudy(form);
      alert('Кейс добавлен!');
    } catch (err) {
      console.error(err);
      alert('Ошибка при добавлении кейса');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto my-10">
      <input
        name="name"
        placeholder="Название кейса"
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <textarea
        name="description"
        placeholder="Описание"
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <input
        name="img"
        placeholder="URL изображения"
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Добавить кейс
      </button>
    </form>
  );
};

export default NewCase;
