import React, { useState } from 'react';
import { createCaseStudy } from '../../api/caseStudiesApi';

const NewCase = () => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    img: null,
  });

  const handleChange = e => {
    const { name, value, files } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('description', form.description);
    if (form.img) {
      formData.append('img', form.img);
    }

    try {
      await createCaseStudy(formData);
      alert('Кейс добавлен!');
    } catch (err) {
      console.error(err);
      alert('Ошибка при добавлении кейса');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-xl mx-auto mt-28 mb-10"
      encType="multipart/form-data"
    >
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
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-6"
      >
        Добавить кейс
      </button>
    </form>
  );
};

export default NewCase;
